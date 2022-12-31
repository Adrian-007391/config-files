local ok, builtin = pcall(require, "telescope.builtin")
if not ok then
    return
end
local telescope = require "telescope"
telescope.setup(
    {
        pickers = {
            find_files = {
                theme = "dropdown"
            },
            live_grep = {
                theme = "dropdown"
            },
            help_tags = {
                theme = "dropdown"
            },
            colorscheme = {
                theme = "dropdown"
            }
        }
    }
)

vim.keymap.set('n', '<leader>pf', builtin.find_files, {})
vim.keymap.set('n', '<leader>pg', builtin.live_grep, {})
vim.keymap.set('n', '<leader>ph', builtin.help_tags, {})
vim.keymap.set('n', '<leader>pc', builtin.colorscheme, {})
