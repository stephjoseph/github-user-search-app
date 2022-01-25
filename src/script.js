const themeButton = document.getElementById("theme-button");
const form = document.getElementById("form");
const search = document.getElementById("search");
const userAvatar = document.getElementById("avatar");
const fullName = document.getElementById("full-name");
const username = document.getElementById("username");
const dateJoined = document.getElementById("date-joined");
const userBio = document.getElementById("bio");
const repositories = document.getElementById("repositories");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const userLocation = document.getElementById("location");
const locationIcon = document.getElementById("location-icon");
const userWebsite = document.getElementById("website");
const websiteIcons = document.querySelectorAll(".website-icon");
const userTwitter = document.getElementById("twitter");
const twitterIcon = document.getElementById("twitter-icon");
const userCompany = document.getElementById("company");
const companyIcon = document.getElementById("company-icon");
const errorMessage = document.getElementById("error-message");

window.onload = () => {
  search.value = "";
};

// Light and Dark Mode Feature

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeButton.innerHTML = `LIGHT
  <div>
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path class="group-active:fill-[#90A4D4]"
      d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"
      fill="#FFF" 
      fill-rule="nonzero"
    />
  </svg>
  </div>`;
  manualThemeToggle();
} else {
  document.documentElement.classList.remove("dark");
  themeButton.innerHTML = `DARK
  <div>
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        class="group-active:fill-[#222731]"
        d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
        fill="#697C9A"
        fill-rule="nonzero"
      />
    </svg>
  </div>`;
  manualThemeToggle();
}

function manualThemeToggle() {
  themeButton.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      themeButton.innerHTML = `DARK
      <div>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            class="group-active:fill-[#222731]"
            d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
            fill="#697C9A"
            fill-rule="nonzero"
          />
        </svg>
      </div>`;
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      themeButton.innerHTML = `LIGHT
      <div>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path class="group-active:fill-[#90A4D4]"
          d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"
          fill="#FFF" 
          fill-rule="nonzero"
        />
      </svg>
      </div>`;
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  });
}

// Username Search

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userSearch = search.value.split(" ").join("");

  fetch("https://api.github.com/users/" + userSearch)
    .then((response) => response.json())
    .then((user) => {
      if (user.message) {
        errorMessage.classList.add("md:block");
      } else {
        let joinDate = new Date(user.created_at);

        errorMessage.classList.remove("md:block");
        userAvatar.setAttribute("src", user.avatar_url);
        fullName.innerText = user.name;
        username.innerText = "@" + user.login;
        dateJoined.innerText = `Joined ${joinDate
          .toDateString()
          .slice(7, 10)} ${joinDate.toDateString().slice(3, 7)} ${joinDate
          .toDateString()
          .slice(10)}`;

        if (user.bio) {
          bio.innerText = user.bio;
          bio.classList.remove("opacity-50");
        } else {
          bio.innerText = "This profile has no bio";
          bio.classList.add("opacity-50");
        }

        repositories.innerText = user.public_repos;
        followers.innerText = user.followers;
        following.innerText = user.following;

        if (user.location) {
          userLocation.innerText = user.location;
          userLocation.classList.remove("opacity-50");
          locationIcon.classList.remove("opacity-50");
        } else {
          userLocation.innerText = "Not available";
          userLocation.classList.add("opacity-50");
          locationIcon.classList.add("opacity-50");
        }

        if (user.blog) {
          userWebsite.innerText = user.blog;
          userWebsite.setAttribute("href", user.blog);
          userWebsite.classList.remove("pointer-events-none");
          userWebsite.classList.remove("opacity-50");
          websiteIcons.forEach((icon) => {
            icon.classList.remove("opacity-50");
          });
        } else {
          userWebsite.innerText = "Not available";
          userWebsite.setAttribute("href", "");
          userWebsite.classList.add("pointer-events-none");
          userWebsite.classList.add("opacity-50");
          websiteIcons.forEach((icon) => {
            icon.classList.add("opacity-50");
          });
        }

        if (user.twitter_username) {
          userTwitter.innerText = user.twitter_username;
          userTwitter.setAttribute(
            "href",
            `https://twitter.com/${user.twitter_username}`
          );
          userTwitter.classList.remove("pointer-events-none");
          userTwitter.classList.remove("opacity-50");
          twitterIcon.classList.remove("opacity-50");
        } else {
          userTwitter.innerText = "Not available";
          userTwitter.setAttribute("href", "");
          userTwitter.classList.add("pointer-events-none");
          userTwitter.classList.add("opacity-50");
          twitterIcon.classList.add("opacity-50");
        }

        if (user.company) {
          userCompany.innerText = user.company;
          userCompany.classList.remove("opacity-50");
          companyIcon.classList.remove("opacity-50");
        } else {
          userCompany.innerText = "Not available";
          userCompany.classList.add("opacity-50");
          companyIcon.classList.add("opacity-50");
        }
      }
    });
});

form.addEventListener("click", () => {
  search.focus();
});
