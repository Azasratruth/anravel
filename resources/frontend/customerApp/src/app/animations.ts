import { animate, query, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),

    // transition('void => *', [
    // style({ opacity: 0 }),
    // animate(2000)
    // ]),

    // transition('* => void', [
    // animate(2000, style({ opacity: 1 }))
    // animate(2000)
    // ])

    // transition('void => *, * => void', [
    //     animate(2000)
    // ]),
    // same
    // transition(':enter, :leave', [
    //     animate(2000)
    // ]),
    // Better Version
    transition('void <=> *', [
        animate(2000)
    ]),

]);


export const fader = 
trigger('routeAnimation', [
    transition('* <=> *', [
        // query(':enter, :leave', [
        //     style({ 
        //         position: 'absolute',
        //         left: 0,
        //         width: '100%',
        //         opacity: 0,
        //         transform: 'scale(0), translateY(100%)',
        //     })
        // ]),
        // query(':enter', [
        //     animate('600 ease', 
        //     style({
        //         opacity: 1,
        //         transform: 'scale(1), translateY(0%)',
        //     }))
        // ])

        style({ opacity: 0 }),
        animate(600)
    ])
]);