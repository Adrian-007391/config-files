"number
set number
"mouse click
set mouse=a
set tabstop=4
" scroll on 8 lines 
set scrolloff=8
"plugin utilization
call plug#begin('~/.config/nvim/autoload')
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'preservim/nerdtree'
call plug#end()
"command mapping (save and save-quit)
nnoremap <C-s> :w <Enter>
nnoremap <C-Enter> :wqa <Enter>

"command mapping (Nerdtree)
nnoremap <C-e> :NERDTreeToggle <Enter>
autocmd VimEnter * NERDTree

"Command mapping (using Tab for Coc)
inoremap <S-TAB> <C-n>

"Command mapping (Copying , pasting and cutting into the universal clipboard)
noremap y "*y
noremap p "*p
noremap x "*x

let g:ale_fixers =['prettier']
let g:ale_fix_on_save = 1
