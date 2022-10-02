function Nnoremap(shortcut, command)
    vim.api.nvim_set_keymap("n" , shortcut , command , {noremap=true})
end
function Tnoremap(shortcut, command)
    vim.api.nvim_set_keymap("t" , shortcut , command , {noremap=true})
end


-- sppace + enter to leave neovim
Nnoremap("<leader><Enter>" , ":wqa <Enter>")

-- control + w to leave terminal
Tnoremap("<C-w>" ,"<C-\\><C-n>" )

-- <C-t> for terminal
Nnoremap("<C-t>" ,"<C-w>s <C-w>j :resize -10 <Enter> :term <Enter> i")

-- Move lines (C-j , C-k)
Nnoremap("<C-k>", "<cmd>m -2 <cr>")
Nnoremap("<C-j>", "<cmd>m +1 <cr>")



