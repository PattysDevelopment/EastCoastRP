module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    serverName: "JoeMama",
    fullServerName: "Joe Mama RP",
    discordLink: "https://discord.gg/YXa8AUW7Sf",
    fivemServerId: "vjarme",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    lspdApp: "https://form.typeform.com/to/d3cL14qy",
    bcsoApp: "",
    civApp: "",
    commsApp: "",
    devApp: "",
    staffApp: "",
    sahpApp: "",
    safrApp: "",
  },
  reactStrictMode: true,  
  images: {
    domains: ['hamy.fileglass.com'],
  },
}