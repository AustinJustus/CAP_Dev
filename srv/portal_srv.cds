using ca.userportal as portal from '../db/portal';

service CatalogService {
    entity userInfo as projection on portal.userInfo;
}
