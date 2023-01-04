local autocolor = require("autoColor")

autocolor.setup({
    {
        -- default
        language = "*.default",
        theme = "onedark",
    },
    {
        -- web dev
        language = { "*.tsx", "*.js", "*.astro", "*.html", "*.ts", "*.css", "*.jsx" },
        theme = "lunar"
    },
    {
        -- configs
        language = { "*.lua", "*.json" },
        theme = "nightfox"
    },
    {
        -- cpp
        language = { "*.cpp", "*.h" },
        theme = "gruvbox"
    }
})
