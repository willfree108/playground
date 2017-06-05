export default function() {
  this.namespace = '/api';

  const apis = [{
    type: 'apis',
    id: '1',
    attributes: {
      title: 'Title 1',
      description: 'Description 1',
      slug: 'api-1',
      cat: 'services',
      img: 'http://ipsumimage.appspot.com/600x250?l=Ipsum%20Image&f=ffffff',
      plan: [
        { id: '11', name: 'plan11' },
        { id: '12', name: 'plan12' },
        { id: '13', name: 'plan13' }
      ]
    }
  },
  {
    type: 'apis',
    id: '2',
    attributes: {
      title: 'Title 2',
      description: 'Description 2',
      slug: 'api-2',
      cat: 'techniques',
      img: 'http://bob.coffeecup.com/layouts/layout-maker-page-br/img/image-652x377.svg',
      plan: [
        { id: '21', name: 'plan21' },
        { id: '22', name: 'plan22' },
        { id: '23', name: 'plan23' }
      ]
    }
  }]

  this.get('/apis', function() {
    return {
      data: apis
    };
  });

  this.get('/apis/:id', function(schema, request) {
    return {
      data: apis.filter(e => e.id === request.params.id)[0]
    }
  })
}
