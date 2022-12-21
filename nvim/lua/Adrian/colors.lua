function ColorMyPencils(color, isTransparentBackground)
    color = color or "nightfox"
    isTransparentBackground = isTransparentBackground or false
    vim.cmd.colorscheme(color)

    if isTransparentBackground then
        vim.api.nvim_set_hl(0, "Normal", { bg = "none" })
    end
    vim.api.nvim_set_hl(0, "NormalFloat", { bg = "none" })


end

ColorMyPencils("catppuccin-mocha", false)
