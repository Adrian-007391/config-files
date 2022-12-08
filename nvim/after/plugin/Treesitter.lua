local status_ok, configs = pcall(require, "nvim-treesitter.configs")
if not status_ok then
	return
end

configs.setup {
	rainbow = {
		enable = true,
		extended_mode = true,
		max_file_lines = nil,
	},
	ensure_installed = { 'cpp', 'typescript', 'lua' },
	sync_install = false,
	ignore_install = { "" },
	autotag = {
		enable = true,
	},
	highlight = {
		enable = true,
		disable = { 'txt' },
		additional_vim_regex_highligting = true,
	},
	indent = {
		enable = true,
		disable = { "" }
	}
}
