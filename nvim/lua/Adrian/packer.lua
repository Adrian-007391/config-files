vim.cmd("packadd packer.nvim")

return require('packer').startup(function(use)
    -- Packer can manage itsel
    use('wbthomason/packer.nvim')
    use('nvim-lua/plenary.nvim')
    use('theprimeagen/harpoon')
    use("nvim-telescope/telescope.nvim")
    use({ 'nvim-telescope/telescope-fzf-native.nvim', run = 'make' })
    use({
        'nvim-treesitter/nvim-treesitter',
        run = function()
            local ts_update = require('nvim-treesitter.install').update({ with_sync = true })
            ts_update()
        end,
    })
    use("p00f/nvim-ts-rainbow")
    use("windwp/nvim-ts-autotag")
    use('neovim/nvim-lspconfig')
    use('hrsh7th/cmp-nvim-lsp')
    use('hrsh7th/cmp-buffer')
    use('hrsh7th/cmp-path')
    use('hrsh7th/cmp-cmdline')
    use('hrsh7th/nvim-cmp')
    use({ "L3MON4D3/LuaSnip", tag = "v1.1.0" })
    use('saadparwaiz1/cmp_luasnip')
    use 'bluz71/vim-nightfly-colors'
    use('christoomey/vim-tmux-navigator')
    use { 'dsznajder/vscode-es7-javascript-react-snippets',
        run = 'yarn install --frozen-lockfile && yarn compile'
    }
    use {
        'numToStr/Comment.nvim',
        config = function()
            require('Comment').setup()
        end
    }

end)
