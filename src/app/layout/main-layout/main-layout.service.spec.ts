import { TestBed } from '@angular/core/testing';

import { MainLayoutService } from './main-layout.service';

describe('MainLayoutService', () => {
  let service: MainLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should showHideSidebar in', () => {
    service.showSidebar.next('in');
    service.showOverlay.next(true);
    expect(service.showHideSidebar()).toBe();
  });

  it('should showHideSidebar out', () => {
    service.showSidebar.next('out');
    service.showOverlay.next(false);
    expect(service.showHideSidebar()).toBe();
  });

  it('should showHideSidebarMenu in', () => {
    service.showSidebarMenu.next('in');
    expect(service.showHideSidebarMenu()).toBe();
  });

  it('should showHideSidebarMenu out', () => {
    service.showSidebarMenu.next('out');
    expect(service.showHideSidebarMenu()).toBe();
  });

});
