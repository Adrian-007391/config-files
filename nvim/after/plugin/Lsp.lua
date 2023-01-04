local lsp = require('lsp-zero')

lsp.preset('recommended')

lsp.on_attach(function(client, bufnr)
    if client.server_capabilities.documentFormattingProvider then
        vim.api.nvim_create_augroup("Format", { clear = true })
        vim.api.nvim_create_autocmd("BufWritePre", { group = "Format", callback = function() vim.lsp.buf.format() end })
    end
    vim.api.nvim_create_augroup("Preview", { clear = true })
    vim.api.nvim_create_autocmd("CursorHold", { group = "Preview", callback = function()
        vim.lsp.buf.hover()
    end })

end)
lsp.setup()
