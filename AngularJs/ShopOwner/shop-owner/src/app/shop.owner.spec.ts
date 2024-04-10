import { TestBed } from '@angular/core/testing';

import { ShopOwner } from './shop.owner';

describe('ShopOwner', () => {
  let service: ShopOwner;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopOwner);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
