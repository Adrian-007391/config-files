function ll --wraps=ls --wraps='exa -T --level 1 --icons' --description 'alias ll=exa -T --level 1 --icons'
  exa -T --level 1 --icons $argv; 
end
