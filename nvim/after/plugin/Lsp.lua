local lsp = require('lsp-zero')

lsp.preset('recommended')

lsp.on_attach(function(client, bufnr)
    if client.server_capabilities.documentFormattingProvider then
        vim.api.nvim_command [[augroup Format]]
        vim.api.nvim_command [[autocmd BufWritePre <buffer> lua vim.lsp.buf.format()]]
        vim.api.nvim_command [[augroup END]]
    end
    vim.api.nvim_create_augroup("Preview", { clear = true })
    vim.api.nvim_create_autocmd("CursorHold", {
        command = "lua vim.lsp.buf.hover()",
        group = "Preview"
    })
    vim.api.nvim_create_augroup("END", { clear = true })


end)
lsp.setup()
