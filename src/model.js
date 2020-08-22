import image from './assets/img.jpg'
import {Block, TitleBlock, TextBlock, TextColumnsBlock, ImageBlock} from './classes/blocks'
import {css} from "./utils";

export const model = [
    new TitleBlock('Test Title', {
        tag: 'h2',
        styles: css({
            'text-align': 'center',
            padding: '2em 1em'
        })
        // styles: 'text-align: center; padding: 2em 1em'
    },),
    new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', {
        styles: 'background: #ccc; color: #000; padding: 0.5rem; text-align: center;'
    }),
    new TextColumnsBlock([
        '1 text',
        '2 text',
        '3 text',
        '4 text',
    ], {
        styles: 'padding: 1rem'
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto'
    }),

]