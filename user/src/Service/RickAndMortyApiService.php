<?php 
namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Model\RickAndMortyModel;

class RickAndMortyApiService
{
    private $client;


    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }


    public function loadApi(): array {
        $data = [];
        $response = $this->client->request(
            'GET',
            'https://rickandmortyapi.com/api/character'
        );
        
        $content = $response->toArray();
        foreach($content['results'] as $result) {
            $model = new RickAndMortyModel($result['name'], $result['image']);
            array_push($data, $model);
        }

        return $data;
    }
}