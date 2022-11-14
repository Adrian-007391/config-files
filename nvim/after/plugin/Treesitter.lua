local status_ok , configs = pcall(require , "nvim-treesitter.configs")
if not status_ok then 
	return 
end 

configs.setup{
	ensure_installed = {'cpp' , 'typescript' , 'lua'},
	sync_install = false,
	ignore_install = {""},
	autotag={
		enable = true,
		filetypes={"html, tsx , astro"}
	},
	highlight = {
		enable = true ,
		disable = {'txt'},
		additional_vim_regex_highligting = true,
	},
	indent = {
		enable = true, 
		disable = {""}
	}
}
