vim.cmd("packadd packer.nvim")

return require('packer').startup(function(use)
    -- Packer can manage itself
    use('wbthomason/packer.nvim')
    -- Telescope (fuzzy finder)
    use {
        'nvim-telescope/telescope.nvim', tag = '0.1.0',
        -- or                            , branch = '0.1.x',
        requires = { { 'nvim-lua/plenary.nvim' } }
    }

    -- harpoon (makes nav to key files easier)
    use { 'ThePrimeagen/harpoon', requires = { 'nvim-lua/plenary.nvim' } }

    -- nightfox (theme package)
    use "EdenEast/nightfox.nvim"

    -- catpuccin
    use { "catppuccin/nvim", as = "catppuccin" }

    -- treesitter (Parser)
    use {
        'nvim-treesitter/nvim-treesitter',
        run = function()
            local ts_update = require('nvim-treesitter.install').update({ with_sync = true })
            ts_update()
        end,
    }

    -- Lsp zero (lsp)
    use {
        'VonHeikemen/lsp-zero.nvim',
        requires = {
            -- LSP Support
            { 'neovim/nvim-lspconfig' },
            { 'williamboman/mason.nvim' },
            { 'williamboman/mason-lspconfig.nvim' },

            -- Autocompletion
            { 'hrsh7th/nvim-cmp' },
            { 'hrsh7th/cmp-buffer' },
            { 'hrsh7th/cmp-path' },
            { 'saadparwaiz1/cmp_luasnip' },
            { 'hrsh7th/cmp-nvim-lsp' },
            { 'hrsh7th/cmp-nvim-lua' },

            -- Snippets
            { 'L3MON4D3/LuaSnip' },
            { 'rafamadriz/friendly-snippets' },
        }
    }

    -- toggle diagnostics (turns on/off diagnostics)
    use('WhoIsSethDaniel/toggle-lsp-diagnostics.nvim')
    -- Autopairs (makes pairs of parenthesis, brackets, etc.)
    use({
        "windwp/nvim-autopairs",
        config = function() require("nvim-autopairs").setup {} end
    })
    -- autotag (makes html tags automatically)
    use("windwp/nvim-ts-autotag")
    -- rainbow (colors parenthesis, brackets, etc. to identify pairs)
    use("p00f/nvim-ts-rainbow")

    -- lualine
    use {
        'nvim-lualine/lualine.nvim',
        requires = { 'kyazdani42/nvim-web-devicons', opt = true },
    }

    -- tmux navigator
    use("christoomey/vim-tmux-navigator")
    -- lunarvim theme
    use("LunarVim/lunar.nvim")
    use("kdheepak/lazygit.nvim")
end)
