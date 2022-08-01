"number
set relativenumber
set nu

"Tab 

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
inoremap <silent><expr> <S-Enter>
      \ pumvisible() ? coc#_select_confirm() :
      \ coc#expandableOrJumpable() ? "\<C-r>=coc#rpc#request('doKeymap', ['snippets-expand-jump',''])\<CR>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

let g:coc_snippet_next = '<TAB>'
