require 'toggle_lsp_diagnostics'.init({ start_on = true })

vim.keymap.set("n", "<C-p>", vim.cmd.ToggleDiag)
