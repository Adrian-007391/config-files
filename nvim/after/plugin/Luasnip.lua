require("luasnip.loaders.from_vscode").lazy_load()

local ls = require "luasnip"
local s = ls.s
local t = ls.text_node
local i = ls.insert_node

-- add snippet
-- ls.add_snippets("name of the filetype", {
-- s("trigger",{t "text node" , i(0,"insert node")})
-- }
