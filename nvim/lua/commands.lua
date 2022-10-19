
function Cmd(shortcut , command , args)
	vim.api.nvim_create_user_command(shortcut , command,{nargs = args})


end 

-- :C command to settings
Cmd("C" , "cd ~/.config/nvim <bar> Telescope find_files" , 0)
Cmd("Q" ,"w <bar> qa!")
Cmd("W","w")
Cmd("V","vsplit <bar>wincmd l<bar> Telescope find_files")
Cmd("S","split <bar>wincmd j<bar> Telescope find_files")
