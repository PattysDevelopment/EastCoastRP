module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    serverName: "East Coast RP",
    fullServerName: "East Coast RP",
    discordLink: "https://discord.gg/YXa8AUW7Sf",
    fivemServerId: "vjarme",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    lspdApp: "https://d1a16chk8r0.typeform.com/to/TvksZg2T",
    bcsoApp: "",
    civApp: "",
    commsApp: "",
    devApp: "",
    staffApp: "",
    sahpApp: "",
    safrApp: "",
    bannerLink: "https://cdn.discordapp.com/attachments/969777717685915669/975956056368885790/image0.jpg",
    ownerName: "Trey6s",
    aboutText: "East Coast RP is a Miami Based Semi-Economy Fivem Server.",
    serverDescription: "None",
    advantageN1: "Quality Roleplay 💪",
    advantageN2: "Serious RP 😊",
    advantageN3: "Active Staff 👷‍♂️",
    advantageN4: "Custom Scripts 📃",
    advantageN5: "Custom Cars 🏎 And EUP",
    advantageN6: "Custom Miami Map",
  },
  reactStrictMode: true,  
  images: {
    domains: ['cdn.discordapp.com'],
  },
}
