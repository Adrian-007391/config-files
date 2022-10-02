function :C --wraps='cd ~/.config/neovim' --wraps='cd ~/.config/nvim' --description 'alias :C=cd ~/.config/nvim'
  cd ~/.config/nvim $argv; 
end
