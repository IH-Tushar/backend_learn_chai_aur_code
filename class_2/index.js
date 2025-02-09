const express = require("express");
require("dotenv").config();

const app = express();

const port = 4000;

const Github_Data = {
  login: "IH-Tushar",
  id: 89769117,
  node_id: "MDQ6VXNlcjg5NzY5MTE3",
  avatar_url: "https://avatars.githubusercontent.com/u/89769117?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/IH-Tushar",
  html_url: "https://github.com/IH-Tushar",
  followers_url: "https://api.github.com/users/IH-Tushar/followers",
  following_url:
    "https://api.github.com/users/IH-Tushar/following{/other_user}",
  gists_url: "https://api.github.com/users/IH-Tushar/gists{/gist_id}",
  starred_url: "https://api.github.com/users/IH-Tushar/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/IH-Tushar/subscriptions",
  organizations_url: "https://api.github.com/users/IH-Tushar/orgs",
  repos_url: "https://api.github.com/users/IH-Tushar/repos",
  events_url: "https://api.github.com/users/IH-Tushar/events{/privacy}",
  received_events_url: "https://api.github.com/users/IH-Tushar/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "IH-TUSHAR",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 31,
  public_gists: 0,
  followers: 3,
  following: 7,
  created_at: "2021-08-30T07:06:03Z",
  updated_at: "2025-01-10T16:52:53Z",
};

app.get("/github", (req, res) => {
  res.json(Github_Data);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/facebook", (req, res) => {
  res.send("welcome to facebook");
});

app.get("/google", (req, res) => {
  res.send("welcome to google");
});
// app.get("/youtube", (req, res) => {
//   res.redirect("https://www.youtube.com/");
// });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
