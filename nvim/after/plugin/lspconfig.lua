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
-- server config
local servers = {'tsserver','clangd','luau_lsp','angularls','html' , 'cssls' , 'pylsp' } -- agrega tus servidores aqui
for _, lsp in ipairs(servers) do 
  nvim_lsp[lsp].setup{
    on_attach = on_attach,
    flags = lsp_flags,
    capabilities = capabilities,
  }
end
