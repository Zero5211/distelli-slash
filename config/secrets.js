module.exports = {
  team: {
    username: process.env.USERNAME,
    slackToken: process.env.SLACKTOKEN,
    slackTeam: process.env.SLACKTEAM
  },
  users: {
    //SlackUsername: ApiToken
    "al": {"apiToken": process.env.SLACKTOKEN }
  }
}
