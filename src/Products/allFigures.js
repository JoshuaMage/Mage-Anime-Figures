import {narutoFiguresAnime} from './naruto/index';
import {newFiguresAnime} from './new/newProduct';
import {onepieceFiguresAnime} from './one-piece/index'
import {bleachFiguresAnime} from './BLEACH/index'

export const allFigures = [
    ...newFiguresAnime,
    ...narutoFiguresAnime,
    ...onepieceFiguresAnime,
    ...bleachFiguresAnime
]