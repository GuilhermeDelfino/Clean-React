import {HttpPostClient} from 'data/protocols/http/http-post-client';
import {RemoteAuthentication} from './remote-authentication';


describe('use case: RemoteAuthentication', ()=>{
	it('should be call HttpClient with correct URL',async  ()=>{
		class HttpPostClientSpy implements HttpPostClient{
			url?: string;
			async post(url: string): Promise<void> {
				this.url = url;
				return Promise.resolve();
			}
		}
		const url = 'url';
		const httpPostClientSpy = new HttpPostClientSpy();
		// system under test
		const sut = new RemoteAuthentication(url, httpPostClientSpy);
		await sut.auth();
		expect(httpPostClientSpy.url).toBe(url);
	});
});