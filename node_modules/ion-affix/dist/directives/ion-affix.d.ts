import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
import { IonAffixEvent } from './ion-affix-event';
import { IonAffixContainer } from './ion-affix-container';
/**
 * Directive for creating affixed list headers. Apply it to ion-list-header and pass a reference to ion-content to it.
 *
 * @example
 * <ion-content #content>
 *     <ion-list>
 *         <ion-list-header ion-affix [content]="content">Group 1</ion-list-header>
 *         <ion-item *ngFor="let item of items">{{item}}</ion-item>
 *     </ion-list>
 * </ion-content>
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 *
 */
export declare class IonAffix implements AfterViewInit, OnDestroy {
    private element;
    private renderer;
    content: any;
    onSticky: EventEmitter<IonAffixEvent>;
    clone: any;
    scrollSubscription: any;
    headerElement: any;
    containerElement: any;
    scrollContainer: IonAffixContainer;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    private updateSticky(scrollTop, containerTop, containerBottom, scrollClientTop, headerHeight, left, right, downwards);
    private reset();
    private applyStyles(left, right);
    private clearStyles();
    ngOnDestroy(): void;
}
