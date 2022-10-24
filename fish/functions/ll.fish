function ll --wraps=ls --wraps='exa --tree --level=2 --icons' --wraps='exa --tree --level=1 --icons' --description 'alias ll=exa --tree --level=1 --icons'
  exa --tree --level=1 --icons $argv; 
end
