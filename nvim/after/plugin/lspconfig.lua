local nvim_lsp = require('lspconfig')


local capabilities = vim.lsp.protocol.make_client_capabilities()
capabilities = require('cmp_nvim_lsp').update_capabilities(capabilities)

-- server setup
local on_attach = function(client, bufnr)

  local function buf_set_keymap(...) vim.api.nvim_buf_set_keymap(bufnr,...) end
  local function buf_set_option(...) vim.api.nvim_buf_set_option(bufnr,...) end

  local opts = {noremap = true , silent = true}

  buf_set_keymap('n', 'gd', '<Cmd>lua vim.lsp.buf.definition()<CR>', opts)


end
-- Mappings.

local lsp_flags = {
  -- This is the default in Nvim 0.7+
  debounce_text_changes = 150,
}
-- luasnip setup
local luasnip= require 'luasnip'


local cmp = require 'cmp'
cmp.setup {
  sources={
    {name='tags'}
  },
  snippet = {
    expand = function(args)
      luasnip.lsp_expand(args.body)
    end,
  },
  mapping = cmp.mapping.preset.insert({
      ['<C-d>'] = cmp.mapping.scroll_docs(-4),
      ['<C-f>'] = cmp.mapping.scroll_docs(4),
      ['<C-Space>'] = cmp.mapping.complete(),
      ['<CR>'] = cmp.mapping.confirm {
        behavior = cmp.ConfirmBehavior.Replace,
        select = true,
      },
      ['<Tab>'] = cmp.mapping(function(fallback)
        if cmp.visible() then
          cmp.select_next_item()
        elseif luasnip.expand_or_jumpable() then
          luasnip.expand_or_jump()
        else
          fallback()
        end
      end, { 'i', 's' }),
    ['<S-Tab>'] = cmp.mapping(function(fallback)
      if cmp.visible() then
        cmp.select_prev_item()
      elseif luasnip.jumpable(-1) then
        luasnip.jump(-1)
      else
        fallback()
      end
    end, { 'i', 's' }),
}),
  sources = {
    { name = 'nvim_lsp' },
    { name = 'luasnip' },
  },
  experimental={
    ghost_text=true
  }
}



-- server config
local servers = {'tsserver','clangd','luau_lsp','angularls','html' , 'cssls' , 'pylsp' } -- agrega tus servidores aqui
for _, lsp in ipairs(servers) do 
  nvim_lsp[lsp].setup{
    on_attach = on_attach,
    flags = lsp_flags,
    capabilities = capabilities,
  }
end
