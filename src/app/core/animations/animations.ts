import {
    trigger,
    animate,
    style,
    transition,
    state,
    animation,
    useAnimation,
    query,
    stagger,
    group,
} from '@angular/animations';

const params = animation(
    [
        style({
            opacity: '{{opacity}}',
            transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
        }),
        animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
    ],
    {
        params: {
            duration: '200ms',
            delay: '0ms',
            opacity: '0',
            scale: '1',
            x: '0',
            y: '0',
            z: '0'
        }
    }
);

export const animations = [
    trigger('slideInOutSidebar', [
        state('in', style({
            'right': '0px'
        })),
        state('out', style({
            'right': '-425px'
        })),
        transition('in => out', [group([
            animate('300ms ease-in-out', style({
                'right': '-425px'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('300ms ease-in-out', style({
                'right': '0px'
            }))
        ]
        )])
    ])
];
