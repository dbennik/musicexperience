# AI Powered Music Experience

This is a Music Discovery application which will search for a suitable song with AI
(Gemini) based on the user prompt given. This Application is made as an assessment within
the limit of 8 hours work.

## Installation

- Run `npm install` to install all packages.
- Replace the `spotifyAccessToken` in spotify.service.ts with a valid Spotify Web API access token. 
Run `curl -X POST "https://accounts.spotify.com/api/token" -H "Content-Type: application/x-www-form-urlencoded" -d "grant_type=client_credentials&client_id={client_id}&client_secret={client_secret}"`
to create this token.
- Replace the `geminiAPIKey` in gemini.service.ts with a valid Gemini API Key.
- Run `ng serve` to start the local host and visit the app on localhost:4200

## Usage

Enter any prompt in the input field to search for the best suited music song.

## Details

When entering and submitting the prompt there will first be a connection
with the Gemini API in order to execute a prompt to find a song based on the input.
The response from Gemini will then be used to retrieve
this song with the Spotify WEB API.

## ToDo

- OAuth2 auth code flow implementation for Spotify API.
- Web music player embedded
- Unit tests