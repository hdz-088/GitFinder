// const fs = require("fs");
// const https = require("http");
// const url = require("url");
// const path = require("path");
// const axios = require("axios");

// ////////////////////////////////////

// const tempIndex = fs.readFileSync("./src/index.html", "utf-8");

// const data = fs.readFileSync("./src/data/data.json", "utf-8");
// const dataObj = JSON.parse(data);

// const followers = fs.readFileSync("./src/data/followers.json", "utf-8");
// const followersObj = JSON.parse(followers);

// const repos = fs.readFileSync("./src/data/repo.json", "utf-8");
// const reposObj = JSON.parse(repos);

// const tempFollowers = fs.readFileSync(
//   "./src/templates/templates-follow.html",
//   "utf-8"
// );
// const tempRepos = fs.readFileSync(
//   "./src/templates/templates-repo.html",
//   "utf-8"
// );

// const formatDate = (dateString) => {
//   if (!dateString) return "-"; // Handle null or undefined
//   const date = new Date(dateString);
//   const options = { day: "2-digit", month: "long", year: "numeric" };
//   return new Intl.DateTimeFormat("en-US", options).format(date);
// };

// // Replace placeholders in the template
// const replaceTemplate = (temp, data) => {
//   let output = temp.replace(/{%REPO_CNT%}/g, data.public_repos);
//   output = output.replace(/{%FOLLOWERS_CNT%}/g, data.followers);
//   output = output.replace(/{%FOLLOWING_CNT%}/g, data.following);
//   output = output.replace(/{%GIST_CNT%}/g, data.public_gists);
//   output = output.replace(/{%FULL_NAME%}/g, data.name);
//   output = output.replace(/{%USER_LINK%}/g, data.html_url);
//   output = output.replace(/{%USER_AVATAR%}/g, data.avatar_url);
//   output = output.replace(/{%USER_NAME%}/g, data.login);
//   output = output.replace(/{%BIO%}/g, data.bio || "");
//   output = output.replace(/{%COMPANY%}/g, data.company || "-");
//   output = output.replace(/{%BIO_LINK%}/g, data.blog || "-");
//   output = output.replace(/{%USER_LOCATION%}/g, data.location || "-");
//   output = output.replace(/{%USER_MAIL%}/g, data.email || "-");
//   output = output.replace(/{%USER_TWITTER%}/g, data.twitter_username || "-");
//   output = output.replace(/{%USER_CREATED%}/g, formatDate(data.created_at));
//   return output;
// };

// const replaceFollowers = (temp, data) => {
//   let output = temp.replace(/{%GH_PROFILE_LINK%}/g, data.avatar_url);
//   output = output.replace(/{%GH_USERNAME%}/g, data.login);
//   output = output.replace(/{%GHACC_LINK%}/g, data.html_url);
//   return output;
// };

// const replaceRepos = (temp, data) => {
//   let output = temp.replace(/{%REPO_URL%}/g, data.html_url);
//   output = output.replace(/{%REPO_NAME%}/g, data.name);
//   output = output.replace(/{%REPO_DESC%}/g, data.description || "");
//   output = output.replace(
//     /{%REPO_LANG%}/g,
//     (data.language ? data.language.split(" ")[0] : "") || "-"
//   );
//   output = output.replace(/{%REPO_FORK%}/g, data.forks);
//   output = output.replace(/{%REPO_ISSUES%}/g, data.open_issues_count);
//   output = output.replace(/{%REPO_STARS%}/g, data.stargazers_count);
//   return output;
// };

// // Create the server
// const server = https.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);

//   if (pathname === "/") {
//     res.writeHead(200, { "content-type": "text/html" });

//     let output = replaceTemplate(tempIndex, dataObj);
//     const followersHtml = followersObj
//       .map((el) => replaceFollowers(tempFollowers, el))
//       .join("");

//     const reposHtml = reposObj
//       .map((el) => replaceRepos(tempRepos, el))
//       .join("");

//     output = output.replace("{%FOLLOWERS_LIST%}", followersHtml);
//     output = output.replace("{%REPOSITORIES%}", reposHtml);
//     res.end(output); // Send the updated template
//   } else if (pathname.endsWith(".css")) {
//     // Serve CSS files
//     const filePath = path.join(__dirname, "src", pathname);
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         res.writeHead(404, { "content-type": "text/html" });
//         res.end("<h1>CSS File Not Found</h1>");
//       } else {
//         res.writeHead(200, { "content-type": "text/css" });
//         res.end(data);
//       }
//     });
//   } else {
//     // Handle 404 for other routes
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end("<h1>Page Not Found</h1>");
//   }
// });

// // Start the server
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening on port 8000");
// });

// const fs = require("fs");
// const https = require("http");
// const url = require("url");
// const path = require("path");
// const axios = require("axios");
// require("dotenv").config();

// ////////////////////////////////////

// const tempIndex = fs.readFileSync("./src/index.html", "utf-8");

// const tempFollowers = fs.readFileSync(
//   "./src/templates/templates-follow.html",
//   "utf-8"
// );
// const tempRepos = fs.readFileSync(
//   "./src/templates/templates-repo.html",
//   "utf-8"
// );

// const formatDate = (dateString) => {
//   if (!dateString) return "-"; // Handle null or undefined
//   const date = new Date(dateString);
//   const options = { day: "2-digit", month: "long", year: "numeric" };
//   return new Intl.DateTimeFormat("en-US", options).format(date);
// };

// // Replace placeholders in the template
// const replaceTemplate = (temp, data) => {
//   let output = temp.replace(/{%REPO_CNT%}/g, data.public_repos);
//   output = output.replace(/{%FOLLOWERS_CNT%}/g, data.followers);
//   output = output.replace(/{%FOLLOWING_CNT%}/g, data.following);
//   output = output.replace(/{%GIST_CNT%}/g, data.public_gists);
//   output = output.replace(/{%FULL_NAME%}/g, data.name);
//   output = output.replace(/{%USER_LINK%}/g, data.html_url);
//   output = output.replace(/{%USER_AVATAR%}/g, data.avatar_url);
//   output = output.replace(/{%USER_NAME%}/g, data.login);
//   output = output.replace(/{%BIO%}/g, data.bio || "");
//   output = output.replace(/{%COMPANY%}/g, data.company || "-");
//   output = output.replace(/{%BIO_LINK%}/g, data.blog || "-");
//   output = output.replace(/{%USER_LOCATION%}/g, data.location || "-");
//   output = output.replace(/{%USER_MAIL%}/g, data.email || "-");
//   output = output.replace(/{%USER_TWITTER%}/g, data.twitter_username || "-");
//   output = output.replace(/{%USER_CREATED%}/g, formatDate(data.created_at));
//   return output;
// };

// const replaceFollowers = (temp, data) => {
//   let output = temp.replace(/{%GH_PROFILE_LINK%}/g, data.avatar_url);
//   output = output.replace(/{%GH_USERNAME%}/g, data.login);
//   output = output.replace(/{%GHACC_LINK%}/g, data.html_url);
//   return output;
// };

// const replaceRepos = (temp, data) => {
//   let output = temp.replace(/{%REPO_URL%}/g, data.html_url);
//   output = output.replace(/{%REPO_NAME%}/g, data.name);
//   output = output.replace(/{%REPO_DESC%}/g, data.description || "");
//   output = output.replace(
//     /{%REPO_LANG%}/g,
//     (data.language ? data.language.split(" ")[0] : "") || "-"
//   );
//   output = output.replace(/{%REPO_FORK%}/g, data.forks);
//   output = output.replace(/{%REPO_ISSUES%}/g, data.open_issues_count);
//   output = output.replace(/{%REPO_STARS%}/g, data.stargazers_count);
//   return output;
// };

// // AXIOS - Fetch data from GitHub API
// const userAPI = (username) => {
//   const url = `https://api.github.com/users/${username}`;

//   return axios
//     .get(url, { headers: { "User-Agent": "Node.js" } })
//     .then((response) => response.data) // Return the JSON data from the API
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       return null;
//     });
// };

// // AXIOS - Fetch Followers Data
// const followersAPI = (username) => {
//   const url = `https://api.github.com/users/${username}/followers`;

//   return axios
//     .get(url, { headers: { "User-Agent": "Node.js" } })
//     .then((response) => response.data) // Return the JSON data from the API
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       return null;
//     });
// };

// // AXIOS - Fetch Repos Data
// const reposAPI = (username) => {
//   const url = `https://api.github.com/users/${username}/repos?sort=created&per_page=21`;

//   return axios
//     .get(url, { headers: { "User-Agent": "Node.js" } })
//     .then((response) => response.data) // Return the JSON data from the API
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       return null;
//     });
// };

// // Create the server
// const server = https.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);
//   if (pathname === "/") {
//     res.writeHead(200, { "content-type": "text/html" });

//     const username = query.username || "hdz-088"; // Username comes from the search input

//     // Use Promise.all to wait for all async calls to finish before proceeding
//     Promise.all([userAPI(username), followersAPI(username), reposAPI(username)])
//       .then(([userData, followersData, reposData]) => {
//         if (!userData) {
//           res.end("<h1>User Not Found</h1>");
//           return;
//         }

//         // Replace template with the fetched data
//         let output = replaceTemplate(tempIndex, userData);

//         // Handle followers data
//         const followersHtml = followersData
//           .map((el) => replaceFollowers(tempFollowers, el))
//           .join("");
//         output = output.replace("{%FOLLOWERS_LIST%}", followersHtml);

//         // Handle repos data
//         const reposHtml = reposData
//           .map((el) => replaceRepos(tempRepos, el))
//           .join("");
//         output = output.replace("{%REPOSITORIES%}", reposHtml);

//         // Send the updated template
//         res.end(output);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         res.end("<h1>Error fetching data from GitHub</h1>");
//       });
//   } else if (pathname.endsWith(".css")) {
//     // Serve CSS files
//     const filePath = path.join(__dirname, "src", pathname);
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         res.writeHead(404, { "content-type": "text/html" });
//         res.end("<h1>CSS File Not Found</h1>");
//       } else {
//         res.writeHead(200, { "content-type": "text/css" });
//         res.end(data);
//       }
//     });
//   } else {
//     // Handle 404 for other routes
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end("<h1>Page Not Found</h1>");
//   }
// });

// const port = process.env.PORT || 8000;
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const axios = require("axios");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const tempIndex = fs.readFileSync("./src/index.html", "utf-8");
const tempFollowers = fs.readFileSync(
  "./src/templates/templates-follow.html",
  "utf-8"
);
const tempRepos = fs.readFileSync(
  "./src/templates/templates-repo.html",
  "utf-8"
);

const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

// Replace placeholders in the template
const replaceTemplate = (temp, data) => {
  let output = temp.replace(/{%REPO_CNT%}/g, data.public_repos);
  output = output.replace(/{%FOLLOWERS_CNT%}/g, data.followers);
  output = output.replace(/{%FOLLOWING_CNT%}/g, data.following);
  output = output.replace(/{%GIST_CNT%}/g, data.public_gists);
  output = output.replace(/{%FULL_NAME%}/g, data.name);
  output = output.replace(/{%USER_LINK%}/g, data.html_url);
  output = output.replace(/{%USER_AVATAR%}/g, data.avatar_url);
  output = output.replace(/{%USER_NAME%}/g, data.login);
  output = output.replace(/{%BIO%}/g, data.bio || "");
  output = output.replace(/{%COMPANY%}/g, data.company || "-");
  output = output.replace(/{%BIO_LINK%}/g, data.blog || "-");
  output = output.replace(/{%USER_LOCATION%}/g, data.location || "-");
  output = output.replace(/{%USER_MAIL%}/g, data.email || "-");
  output = output.replace(/{%USER_TWITTER%}/g, data.twitter_username || "-");
  output = output.replace(/{%USER_CREATED%}/g, formatDate(data.created_at));
  return output;
};

const replaceFollowers = (temp, data) => {
  let output = temp.replace(/{%GH_PROFILE_LINK%}/g, data.avatar_url);
  output = output.replace(/{%GH_USERNAME%}/g, data.login);
  output = output.replace(/{%GHACC_LINK%}/g, data.html_url);
  return output;
};

const replaceRepos = (temp, data) => {
  let output = temp.replace(/{%REPO_URL%}/g, data.html_url);
  output = output.replace(/{%REPO_NAME%}/g, data.name);
  output = output.replace(/{%REPO_DESC%}/g, data.description || "");
  output = output.replace(
    /{%REPO_LANG%}/g,
    (data.language ? data.language.split(" ")[0] : "") || "-"
  );
  output = output.replace(/{%REPO_FORK%}/g, data.forks);
  output = output.replace(/{%REPO_ISSUES%}/g, data.open_issues_count);
  output = output.replace(/{%REPO_STARS%}/g, data.stargazers_count);
  return output;
};

// AXIOS - Fetch data from GitHub API
const userAPI = (username) => {
  const url = `https://api.github.com/users/${username}`;
  return axios
    .get(url, { headers: { "User-Agent": "Node.js" } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null;
    });
};

// AXIOS - Fetch Followers Data
const followersAPI = (username) => {
  const url = `https://api.github.com/users/${username}/followers`;
  return axios
    .get(url, { headers: { "User-Agent": "Node.js" } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null;
    });
};

// AXIOS - Fetch Repos Data
const reposAPI = (username) => {
  const url = `https://api.github.com/users/${username}/repos?sort=created&per_page=21`;
  return axios
    .get(url, { headers: { "User-Agent": "Node.js" } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      return null;
    });
};

module.exports = async (req, res) => {
  const { query, pathname } = require("url").parse(req.url, true);
  if (pathname === "/") {
    res.setHeader("Content-Type", "text/html");

    const username = query.username || "hdz-088"; // Default username if none is provided

    try {
      const [userData, followersData, reposData] = await Promise.all([
        userAPI(username),
        followersAPI(username),
        reposAPI(username),
      ]);

      if (!userData) {
        res.end("<h1>User Not Found</h1>");
        return;
      }

      // Replace template with the fetched data
      let output = replaceTemplate(tempIndex, userData);

      // Handle followers data
      const followersHtml = followersData
        .map((el) => replaceFollowers(tempFollowers, el))
        .join("");
      output = output.replace("{%FOLLOWERS_LIST%}", followersHtml);

      // Handle repos data
      const reposHtml = reposData
        .map((el) => replaceRepos(tempRepos, el))
        .join("");
      output = output.replace("{%REPOSITORIES%}", reposHtml);

      // Send the updated template
      res.end(output);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.end("<h1>Error fetching data from GitHub</h1>");
    }
  } else if (pathname.endsWith(".css")) {
    // Serve CSS files from public folder
    const filePath = path.join(__dirname, "public", pathname);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>CSS File Not Found</h1>");
      } else {
        res.writeHead(200, { "content-type": "text/css" });
        res.end(data);
      }
    });
  } else {
    // Handle 404 for other routes
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
};
