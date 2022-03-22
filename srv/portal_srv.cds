using ca.registrationprotal as portal from '../db/portal';
@requires: 'authenticated-user'
service CatalogService {
 entity userInfo
	as projection on portal.userInfo;
}