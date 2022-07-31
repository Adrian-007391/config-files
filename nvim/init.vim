"number
set relativenumber
set nu

"mouse click
set mouse=a
"Tab 
set tabstop=4
set autoindent

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


command! -nargs=0 Prettier :CocCommand prettier.forceFormatDocument
