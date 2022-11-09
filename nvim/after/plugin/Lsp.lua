local mfpath = "mapfunctions"
local mf = require (mfpath)

local on_attach = function(client)
	if client.server_capabilities.documentFormattingProvider then 
		vim.api.nvim_command[[augroup Format]]
		vim.api.nvim_command[[autocmd! * <buffer>]]
		vim.api.nvim_command[[autocmd BufWritePre <buffer> lua vim.lsp.buf.formatting_seq_sync()]]
		vim.api.nvim_command[[augroup END]]
	end
	mf.nnoremap('gd','<Cmd>lua vim.lsp.buf.definition()<Cr>')
	mf.nnoremap('K','<Cmd>lua vim.lsp.buf.hover()<Cr>')
end

-- cmp 
 -- Set up nvim-cmp.
  local cmp = require'cmp'

  cmp.setup({
    snippet = {
      -- REQUIRED - you must specify a snippet engine
      expand = function(args)
        -- vim.fn["vsnip#anonymous"](args.body) -- For `vsnip` users.
        require('luasnip').lsp_expand(args.body) -- For `luasnip` users.
        -- require('snippy').expand_snippet(args.body) -- For `snippy` users.
        -- vim.fn["UltiSnips#Anon"](args.body) -- For `ultisnips` users.
      end,
    },
    window = {
      -- completion = cmp.config.window.bordered(),
      -- documentation = cmp.config.window.bordered(),
    },
    mapping = cmp.mapping.preset.insert({
      ['<C-b>'] = cmp.mapping.scroll_docs(-4),
	  ['<C-f>'] = cmp.mapping.scroll_docs(4),
      ['<C-Space>'] = cmp.mapping.complete(),
      ['<C-e>'] = cmp.mapping.abort(),
      ['<CR>'] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
    }),
	

    sources = cmp.config.sources({
		{name = 'nvim_lsp' },
		{name = 'buffer'},
		{name = 'path'},
		{name = 'nvim-lua'},
		--{ name = 'vsnip' }, -- For vsnip users.
		{name = 'luasnip' }, -- For luasnip users.
		-- { name = 'ultisnips' }, -- For ultisnips users.
		-- { name = 'snippy' }, -- For snippy users.
	}, {
		{name = 'buffer' },
	})
})

  -- Set configuration for specific filetype.
  cmp.setup.filetype('gitcommit', {
    sources = cmp.config.sources({
      { name = 'cmp_git' }, -- You can specify the `cmp_git` source if you were installed it.
    }, {
      { name = 'buffer' },
    })
  })

  -- Use buffer source for `/` and `?` (if you enabled `native_menu`, this won't work anymore).
  cmp.setup.cmdline({ '/', '?' }, {
    mapping = cmp.mapping.preset.cmdline(),
    sources = {
      { name = 'buffer' }
    }
  })

  -- Use cmdline & path source for ':' (if you enabled `native_menu`, this won't work anymore).
  cmp.setup.cmdline(':', {
    mapping = cmp.mapping.preset.cmdline(),
    sources = cmp.config.sources({
      { name = 'path' }
    }, {
      { name = 'cmdline' }
    })
  })


local capabilities = require('cmp_nvim_lsp').default_capabilities()

-- add servers here
local servers = {'clangd','tsserver','astro','html','cssls'}

for _,server in ipairs(servers) do 
	require'lspconfig'[server].setup{
		on_attach = on_attach,
		capabilities = capabilities
	}
end




