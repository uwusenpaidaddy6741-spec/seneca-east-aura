const API = "https://seneca-east-aura.uwusenpaidaddy6741.workers.dev/api";

let data = [];
let cooldownUntil = Number(
  localStorage.getItem("auraCooldownUntil") || 0
);

function esc(value) {
  return String(value).replace(/[&<>"']/g, function (c) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[c];
  });
}

function fmt(number) {
  return Number(number || 0).toLocaleString();
}

function cooldownRemaining() {
  return Math.max(0, cooldownUntil - Date.now());
}

function cooldownText() {
  const ms = cooldownRemaining();

  if (!ms) {
    return "Vote";
  }

  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  return `${hours}h ${String(minutes).padStart(2, "0")}m ${String(
    seconds
  ).padStart(2, "0")}s`;
}

async function loadLeaderboard() {
  try {
    const response = await fetch(`${API}/leaderboard`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Leaderboard request failed");
    }

    data = await response.json();
  } catch (error) {
    console.error(error);

    // Show the staff list even if the API is temporarily unavailable.
    data = STAFF.map((staff, index) => ({
      ...staff,
      votes: 0,
      aura:
        72 +
        ((staff.name.length * 17 + index * 13) % 2400) / 100
    }));
  }

  render();
}

function render() {
  const searchElement = document.getElementById("search");
  const departmentElement = document.getElementById("dept");

  const search = (searchElement?.value || "")
    .toLowerCase()
    .trim();

  const department = departmentElement?.value || "all";

  let rows = data.filter(function (staff) {
    const matchesSearch =
      !search ||
      `${staff.name} ${staff.role}`
        .toLowerCase()
        .includes(search);

    const matchesDepartment =
      department === "all" ||
      staff.dept === department;

    return matchesSearch && matchesDepartment;
  });

  const all = [...data].sort(function (a, b) {
    return (
      Number(b.votes || 0) - Number(a.votes || 0) ||
      Number(b.aura || 0) - Number(a.aura || 0) ||
      a.name.localeCompare(b.name)
    );
  });

  rows.sort(function (a, b) {
    return (
      Number(b.votes || 0) - Number(a.votes || 0) ||
      Number(b.aura || 0) - Number(a.aura || 0) ||
      a.name.localeCompare(b.name)
    );
  });

  const leader = all[0];

  const staffCount = document.getElementById("staffCount");
  const totalVotes = document.getElementById("totalVotes");
  const topScore = document.getElementById("topScore");
  const updated = document.getElementById("updated");

  if (staffCount) {
    staffCount.textContent = data.length;
  }

  if (totalVotes) {
    totalVotes.textContent = fmt(
      data.reduce(
        (total, staff) => total + Number(staff.votes || 0),
        0
      )
    );
  }

  if (topScore) {
    topScore.textContent = leader
      ? Number(leader.aura || 0).toFixed(1)
      : "0";
  }

  if (updated) {
    updated.textContent = "Live public totals";
  }

  const leaderBox = document.getElementById("leaderBox");

  if (leaderBox && leader) {
    leaderBox.innerHTML = `
      <div class="leader-main">
        <div class="trophy">🏆</div>

        <div>
          <div class="leader-name">
            ${esc(leader.name)}
          </div>

          <div class="leader-role">
            ${esc(leader.role)} • ${esc(leader.dept)}
          </div>
        </div>

        <div class="leader-score">
          ${Number(leader.aura || 0).toFixed(1)}
        </div>
      </div>
    `;
  }

  const maxAura = Math.max(
    1,
    ...all.map((staff) => Number(staff.aura || 0))
  );

  const rowsElement = document.getElementById("rows");

  if (!rowsElement) {
    return;
  }

  if (!rows.length) {
    rowsElement.innerHTML = `
      <div class="empty">
        No staff members match that search.
      </div>
    `;

    return;
  }

  const cooldown = cooldownRemaining();

  rowsElement.innerHTML = rows
    .map(function (staff) {
      const rank =
        all.findIndex((item) => item.name === staff.name) + 1;

      const aura = Number(staff.aura || 0);

      return `
        <div class="row">

<div class="rank">
  ${rank === 1 ? "🏆 #1 AURA CHAMPION" : `#${rank}`}
</div>

          <div>
            <div class="name">
              ${esc(staff.name)}
            </div>

            <div class="role">
              ${esc(staff.role)} • ${esc(staff.dept)}
            </div>
          </div>

          <div class="score">
            ${aura.toFixed(1)}
          </div>

          <div>
            <div class="bar">
              <i style="width:${Math.min(
                100,
                (aura / maxAura) * 100
              )}%"></i>
            </div>

            <div class="vote">

              <button
                class="vote-btn"
                data-name="${esc(staff.name)}"
                ${cooldown ? "disabled" : ""}
              >
                ⬆ Vote
              </button>

              <span class="status">
                ${cooldown ? cooldownText() : "Vote"}
              </span>

            </div>
          </div>

        </div>
      `;
    })
    .join("");
}

async function castVote(name) {
  if (cooldownRemaining()) {
    return;
  }

  try {
    const response = await fetch(`${API}/vote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: name
      })
    });

    const body = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (body.error === "COOLDOWN") {
        cooldownUntil =
          Date.now() +
          Number(body.retryAfter || 6 * 60 * 60 * 1000);

        localStorage.setItem(
          "auraCooldownUntil",
          cooldownUntil
        );

        render();

        alert("You can vote again in 6 hours.");

        return;
      }

      throw new Error(
        body.error || "The vote failed."
      );
    }

    cooldownUntil =
      Date.now() + 6 * 60 * 60 * 1000;

    localStorage.setItem(
      "auraCooldownUntil",
      cooldownUntil
    );

    if (body.leaderboard) {
      data = body.leaderboard;
    } else {
      await loadLeaderboard();
      return;
    }

    render();

  } catch (error) {
    console.error(error);

    alert(
      "The voting server could not process your vote. Please try again."
    );
  }
}

const searchElement = document.getElementById("search");

if (searchElement) {
  searchElement.addEventListener(
    "input",
    render
  );
}

const departmentElement = document.getElementById("dept");

if (departmentElement) {
  departmentElement.addEventListener(
    "change",
    render
  );
}

const rowsElement = document.getElementById("rows");

if (rowsElement) {
  rowsElement.addEventListener(
    "click",
    function (event) {
      const button =
        event.target.closest(".vote-btn");

      if (
        button &&
        !button.disabled
      ) {
        castVote(button.dataset.name);
      }
    }
  );
}

// Keep the countdown updated.
setInterval(function () {
  render();
}, 1000);

// Load the real vote totals from Cloudflare.
loadLeaderboard();
