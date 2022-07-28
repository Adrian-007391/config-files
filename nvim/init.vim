"number
set number
"mouse click
set mouse=a
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
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ CheckBackspace() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

"Command mapping (Copying , pasting and cutting into the universal clipboard)
noremap y "*y
noremap p "*p
noremap x "*x
