function getElements(id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};

function sortList(id, sel, filter) {
  var a, b, c, i, ii, iii, hit;
  a = getElements(id);
  for (i = 0; i < a.length; i++) {
    b = a[i].querySelectorAll(sel);
    for (ii = 0; ii < b.length; ii++) {
      hit = 0;
      if (b[ii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        hit = 1;
      }
      c = b[ii].getElementsByTagName("*");
      for (iii = 0; iii < c.length; iii++) {
        if (c[iii].innerText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          hit = 1;
        }
      }
      if (hit == 1) {
        b[ii].style.display = "";
      } else {
        b[ii].style.display = "none";
      }
    }
  }
};

function buildSongList() {
  var songList = document.getElementById("songList");

  if (songList != null) {
    for (var i = 0; i < data["items"].length; i++) {
      var table_element = document.createElement("tr");
      var artists = data["items"][i]["track"]["artists"];

      var artists_string = "";
      console.log(artists.length);
      for (var j = 0; j < artists.length; j++) {
        var artist = artists[j].name;
        artists_string += artist;
        if (j != artists.length - 1) {
          artists_string += ", ";
        }
      }
      //console.log(artists_string);

      var inner_html = `
          <td  width=5%><img class="album_art" src="./cbook.jpg"></img></td>
          <td>${data["items"][i]["track"]["name"]}</td>
          <td>Single</td>
          <td>${artists_string}</td>
          <td>Johnny</td>
      `;
      console.log("hello");

      table_element.innerHTML = inner_html;
      songList.appendChild(table_element);
    }
  }
};

//function filterClick () {
//  $(song_page).ready(function() {
//      $("#btnFilter").click(function() {
//         $("#songList tbody tr").show();
//          if($("#filter").val.length > 0) {
//              $("#songList tbody tr").filter(function(index, elm) {
//                  return $(elm).html().toUpperCase().indexOf($("#filter").val().toUpperCase()) < 0;
//              }).hide();
//          }
//      });
//  });
//}

















































var data = {
  "items": [
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG"
            },
            "href": "https://api.spotify.com/v1/artists/4V8Sr092TqfHkfAA5fXXqG",
            "id": "4V8Sr092TqfHkfAA5fXXqG",
            "name": "Luis Fonsi",
            "type": "artist",
            "uri": "spotify:artist:4V8Sr092TqfHkfAA5fXXqG"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"
            },
            "href": "https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m",
            "id": "4VMYDCV2IEDYJArk749S6m",
            "name": "Daddy Yankee",
            "type": "artist",
            "uri": "spotify:artist:4VMYDCV2IEDYJArk749S6m"
          }
        ],
        "name": "Despacito (Featuring Daddy Yankee)"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
            },
            "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
            "id": "6eUKZXaKkcviH0Ku9w2n3V",
            "name": "Ed Sheeran",
            "type": "artist",
            "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
          }
        ],
        "name": "Shape of You"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5sK8BsvyDl4TFA6KaBf8or"
            },
            "href": "https://api.spotify.com/v1/artists/5sK8BsvyDl4TFA6KaBf8or",
            "id": "5sK8BsvyDl4TFA6KaBf8or",
            "name": "Charly Black",
            "type": "artist",
            "uri": "spotify:artist:5sK8BsvyDl4TFA6KaBf8or"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"
            },
            "href": "https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m",
            "id": "4VMYDCV2IEDYJArk749S6m",
            "name": "Daddy Yankee",
            "type": "artist",
            "uri": "spotify:artist:4VMYDCV2IEDYJArk749S6m"
          }
        ],
        "name": "Gyal You A Party Animal - Remix"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7qG3b048QCHVRO5Pv1T5lw"
            },
            "href": "https://api.spotify.com/v1/artists/7qG3b048QCHVRO5Pv1T5lw",
            "id": "7qG3b048QCHVRO5Pv1T5lw",
            "name": "Enrique Iglesias",
            "type": "artist",
            "uri": "spotify:artist:7qG3b048QCHVRO5Pv1T5lw"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5luyt0SUvGkDMY4ILP6Qhl"
            },
            "href": "https://api.spotify.com/v1/artists/5luyt0SUvGkDMY4ILP6Qhl",
            "id": "5luyt0SUvGkDMY4ILP6Qhl",
            "name": "Descemer Bueno",
            "type": "artist",
            "uri": "spotify:artist:5luyt0SUvGkDMY4ILP6Qhl"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/21451j1KhjAiaYKflxBjr1"
            },
            "href": "https://api.spotify.com/v1/artists/21451j1KhjAiaYKflxBjr1",
            "id": "21451j1KhjAiaYKflxBjr1",
            "name": "Zion & Lennox",
            "type": "artist",
            "uri": "spotify:artist:21451j1KhjAiaYKflxBjr1"
          }
        ],
        "name": "SUBEME LA RADIO"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1SupJlEpv7RS2tPNRaHViT"
            },
            "href": "https://api.spotify.com/v1/artists/1SupJlEpv7RS2tPNRaHViT",
            "id": "1SupJlEpv7RS2tPNRaHViT",
            "name": "Nicky Jam",
            "type": "artist",
            "uri": "spotify:artist:1SupJlEpv7RS2tPNRaHViT"
          }
        ],
        "name": "El Amante"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
            },
            "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
            "id": "0EmeFodog0BfCgMzAIvKQp",
            "name": "Shakira",
            "type": "artist",
            "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1r4hJ1h58CWwUQe3MxPuau"
            },
            "href": "https://api.spotify.com/v1/artists/1r4hJ1h58CWwUQe3MxPuau",
            "id": "1r4hJ1h58CWwUQe3MxPuau",
            "name": "Maluma",
            "type": "artist",
            "uri": "spotify:artist:1r4hJ1h58CWwUQe3MxPuau"
          }
        ],
        "name": "Chantaje"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6MDME20pz9RveH9rEXvrOM"
            },
            "href": "https://api.spotify.com/v1/artists/6MDME20pz9RveH9rEXvrOM",
            "id": "6MDME20pz9RveH9rEXvrOM",
            "name": "Clean Bandit",
            "type": "artist",
            "uri": "spotify:artist:6MDME20pz9RveH9rEXvrOM"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3Isy6kedDrgPYoTS1dazA9"
            },
            "href": "https://api.spotify.com/v1/artists/3Isy6kedDrgPYoTS1dazA9",
            "id": "3Isy6kedDrgPYoTS1dazA9",
            "name": "Sean Paul",
            "type": "artist",
            "uri": "spotify:artist:3Isy6kedDrgPYoTS1dazA9"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1zNqDE7qDGCsyzJwohVaoX"
            },
            "href": "https://api.spotify.com/v1/artists/1zNqDE7qDGCsyzJwohVaoX",
            "id": "1zNqDE7qDGCsyzJwohVaoX",
            "name": "Anne-Marie",
            "type": "artist",
            "uri": "spotify:artist:1zNqDE7qDGCsyzJwohVaoX"
          }
        ],
        "name": "Rockabye (feat. Sean Paul & Anne-Marie)"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5H1nN1SzW0qNeUEZvuXjAj"
            },
            "href": "https://api.spotify.com/v1/artists/5H1nN1SzW0qNeUEZvuXjAj",
            "id": "5H1nN1SzW0qNeUEZvuXjAj",
            "name": "Danny Ocean",
            "type": "artist",
            "uri": "spotify:artist:5H1nN1SzW0qNeUEZvuXjAj"
          }
        ],
        "name": "Me Rehúso"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3E6xrwgnVfYCrCs0ePERDz"
            },
            "href": "https://api.spotify.com/v1/artists/3E6xrwgnVfYCrCs0ePERDz",
            "id": "3E6xrwgnVfYCrCs0ePERDz",
            "name": "Wisin",
            "type": "artist",
            "uri": "spotify:artist:3E6xrwgnVfYCrCs0ePERDz"
          }
        ],
        "name": "Vacaciones"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
            },
            "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
            "id": "3TVXtAsR1Inumwj472S9r4",
            "name": "Drake",
            "type": "artist",
            "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp"
            },
            "href": "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
            "id": "3tVQdUvClmAT7URs9V3rsp",
            "name": "WizKid",
            "type": "artist",
            "uri": "spotify:artist:3tVQdUvClmAT7URs9V3rsp"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/77DAFfvm3O9zT5dIoG0eIO"
            },
            "href": "https://api.spotify.com/v1/artists/77DAFfvm3O9zT5dIoG0eIO",
            "id": "77DAFfvm3O9zT5dIoG0eIO",
            "name": "Kyla",
            "type": "artist",
            "uri": "spotify:artist:77DAFfvm3O9zT5dIoG0eIO"
          }
        ],
        "name": "One Dance"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0zZJhc1T0zBurhnBwQ2fcu"
            },
            "href": "https://api.spotify.com/v1/artists/0zZJhc1T0zBurhnBwQ2fcu",
            "id": "0zZJhc1T0zBurhnBwQ2fcu",
            "name": "Mark B.",
            "type": "artist",
            "uri": "spotify:artist:0zZJhc1T0zBurhnBwQ2fcu"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3InfS9TeNQro4bp9EWtuyP"
            },
            "href": "https://api.spotify.com/v1/artists/3InfS9TeNQro4bp9EWtuyP",
            "id": "3InfS9TeNQro4bp9EWtuyP",
            "name": "Gabriel",
            "type": "artist",
            "uri": "spotify:artist:3InfS9TeNQro4bp9EWtuyP"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY"
            },
            "href": "https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY",
            "id": "1i8SpTcr7yvPOmcqrbnVXY",
            "name": "Ozuna",
            "type": "artist",
            "uri": "spotify:artist:1i8SpTcr7yvPOmcqrbnVXY"
          }
        ],
        "name": "Playa y Arena (Remix)"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1GaBsp1ICIp1e6udgE7fba"
            },
            "href": "https://api.spotify.com/v1/artists/1GaBsp1ICIp1e6udgE7fba",
            "id": "1GaBsp1ICIp1e6udgE7fba",
            "name": "Kevin Lyttle",
            "type": "artist",
            "uri": "spotify:artist:1GaBsp1ICIp1e6udgE7fba"
          }
        ],
        "name": "Turn Me On"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3HPOnbuwLP2qlwWQ7cgxYW"
            },
            "href": "https://api.spotify.com/v1/artists/3HPOnbuwLP2qlwWQ7cgxYW",
            "id": "3HPOnbuwLP2qlwWQ7cgxYW",
            "name": "Xantos",
            "type": "artist",
            "uri": "spotify:artist:3HPOnbuwLP2qlwWQ7cgxYW"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7oCLjINIMWifuknBBsg3CO"
            },
            "href": "https://api.spotify.com/v1/artists/7oCLjINIMWifuknBBsg3CO",
            "id": "7oCLjINIMWifuknBBsg3CO",
            "name": "Dynell",
            "type": "artist",
            "uri": "spotify:artist:7oCLjINIMWifuknBBsg3CO"
          }
        ],
        "name": "Bailame Despacio"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5"
            },
            "href": "https://api.spotify.com/v1/artists/1vyhD5VmyZ7KMfW5gqLgo5",
            "id": "1vyhD5VmyZ7KMfW5gqLgo5",
            "name": "J Balvin",
            "type": "artist",
            "uri": "spotify:artist:1vyhD5VmyZ7KMfW5gqLgo5"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8"
            },
            "href": "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
            "id": "2RdwBSPQiwcmiDo9kixcl8",
            "name": "Pharrell Williams",
            "type": "artist",
            "uri": "spotify:artist:2RdwBSPQiwcmiDo9kixcl8"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6veh5zbFpm31XsPdjBgPER"
            },
            "href": "https://api.spotify.com/v1/artists/6veh5zbFpm31XsPdjBgPER",
            "id": "6veh5zbFpm31XsPdjBgPER",
            "name": "BIA",
            "type": "artist",
            "uri": "spotify:artist:6veh5zbFpm31XsPdjBgPER"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4nkGTHzKGUsL7WjpaKLEDm"
            },
            "href": "https://api.spotify.com/v1/artists/4nkGTHzKGUsL7WjpaKLEDm",
            "id": "4nkGTHzKGUsL7WjpaKLEDm",
            "name": "Sky",
            "type": "artist",
            "uri": "spotify:artist:4nkGTHzKGUsL7WjpaKLEDm"
          }
        ],
        "name": "Safari"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
            },
            "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
            "id": "0TnOYISbd1XYRBk9myaseg",
            "name": "Pitbull",
            "type": "artist",
            "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5"
            },
            "href": "https://api.spotify.com/v1/artists/1vyhD5VmyZ7KMfW5gqLgo5",
            "id": "1vyhD5VmyZ7KMfW5gqLgo5",
            "name": "J Balvin",
            "type": "artist",
            "uri": "spotify:artist:1vyhD5VmyZ7KMfW5gqLgo5"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4nDoRrQiYLoBzwC5BhVJzF"
            },
            "href": "https://api.spotify.com/v1/artists/4nDoRrQiYLoBzwC5BhVJzF",
            "id": "4nDoRrQiYLoBzwC5BhVJzF",
            "name": "Camila Cabello",
            "type": "artist",
            "uri": "spotify:artist:4nDoRrQiYLoBzwC5BhVJzF"
          }
        ],
        "name": "Hey Ma (with Pitbull & J Balvin feat. Camila Cabello) - Spanish Version"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0zZJhc1T0zBurhnBwQ2fcu"
            },
            "href": "https://api.spotify.com/v1/artists/0zZJhc1T0zBurhnBwQ2fcu",
            "id": "0zZJhc1T0zBurhnBwQ2fcu",
            "name": "Mark B.",
            "type": "artist",
            "uri": "spotify:artist:0zZJhc1T0zBurhnBwQ2fcu"
          }
        ],
        "name": "Aqui No Falta Na"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY"
            },
            "href": "https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY",
            "id": "1i8SpTcr7yvPOmcqrbnVXY",
            "name": "Ozuna",
            "type": "artist",
            "uri": "spotify:artist:1i8SpTcr7yvPOmcqrbnVXY"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"
            },
            "href": "https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m",
            "id": "4VMYDCV2IEDYJArk749S6m",
            "name": "Daddy Yankee",
            "type": "artist",
            "uri": "spotify:artist:4VMYDCV2IEDYJArk749S6m"
          }
        ],
        "name": "No Quiere Enamorarse (Remix) [feat. Daddy Yankee]"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/738wLrAtLtCtFOLvQBXOXp"
            },
            "href": "https://api.spotify.com/v1/artists/738wLrAtLtCtFOLvQBXOXp",
            "id": "738wLrAtLtCtFOLvQBXOXp",
            "name": "Major Lazer",
            "type": "artist",
            "uri": "spotify:artist:738wLrAtLtCtFOLvQBXOXp"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4VZY0nxYMSNotbS7WjNVQy"
            },
            "href": "https://api.spotify.com/v1/artists/4VZY0nxYMSNotbS7WjNVQy",
            "id": "4VZY0nxYMSNotbS7WjNVQy",
            "name": "Nyla",
            "type": "artist",
            "uri": "spotify:artist:4VZY0nxYMSNotbS7WjNVQy"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/374sWpAJsbZckf98df2jJJ"
            },
            "href": "https://api.spotify.com/v1/artists/374sWpAJsbZckf98df2jJJ",
            "id": "374sWpAJsbZckf98df2jJJ",
            "name": "Fuse ODG",
            "type": "artist",
            "uri": "spotify:artist:374sWpAJsbZckf98df2jJJ"
          }
        ],
        "name": "Light It Up (feat. Nyla & Fuse ODG) - Remix"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5sK4yZ1bcHlFC73EYAhapP"
            },
            "href": "https://api.spotify.com/v1/artists/5sK4yZ1bcHlFC73EYAhapP",
            "id": "5sK4yZ1bcHlFC73EYAhapP",
            "name": "Croni-K",
            "type": "artist",
            "uri": "spotify:artist:5sK4yZ1bcHlFC73EYAhapP"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5Q2jYH3Qje5epwcKx0nMfF"
            },
            "href": "https://api.spotify.com/v1/artists/5Q2jYH3Qje5epwcKx0nMfF",
            "id": "5Q2jYH3Qje5epwcKx0nMfF",
            "name": "Yei",
            "type": "artist",
            "uri": "spotify:artist:5Q2jYH3Qje5epwcKx0nMfF"
          }
        ],
        "name": "Me da Igual"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0d2ilHJsRru3Y3EMqOQmO7"
            },
            "href": "https://api.spotify.com/v1/artists/0d2ilHJsRru3Y3EMqOQmO7",
            "id": "0d2ilHJsRru3Y3EMqOQmO7",
            "name": "Eyci and Cody",
            "type": "artist",
            "uri": "spotify:artist:0d2ilHJsRru3Y3EMqOQmO7"
          }
        ],
        "name": "Me Gusta - Radio Edit"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7tU1VKOuxiNZwBZC6RHidA"
            },
            "href": "https://api.spotify.com/v1/artists/7tU1VKOuxiNZwBZC6RHidA",
            "id": "7tU1VKOuxiNZwBZC6RHidA",
            "name": "Alexis y Fido",
            "type": "artist",
            "uri": "spotify:artist:7tU1VKOuxiNZwBZC6RHidA"
          }
        ],
        "name": "La Cómplice"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4fCRFHEQgjqakvFgQCliMp"
            },
            "href": "https://api.spotify.com/v1/artists/4fCRFHEQgjqakvFgQCliMp",
            "id": "4fCRFHEQgjqakvFgQCliMp",
            "name": "Jacob Forever",
            "type": "artist",
            "uri": "spotify:artist:4fCRFHEQgjqakvFgQCliMp"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/329e4yvIujISKGKz1BZZbO"
            },
            "href": "https://api.spotify.com/v1/artists/329e4yvIujISKGKz1BZZbO",
            "id": "329e4yvIujISKGKz1BZZbO",
            "name": "Farruko",
            "type": "artist",
            "uri": "spotify:artist:329e4yvIujISKGKz1BZZbO"
          }
        ],
        "name": "Hasta Que Se Seque el Malecón - Remix"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6VD4UEUPvtsemqD3mmTqCR"
            },
            "href": "https://api.spotify.com/v1/artists/6VD4UEUPvtsemqD3mmTqCR",
            "id": "6VD4UEUPvtsemqD3mmTqCR",
            "name": "Deorro",
            "type": "artist",
            "uri": "spotify:artist:6VD4UEUPvtsemqD3mmTqCR"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z"
            },
            "href": "https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z",
            "id": "7bXgB6jMjp9ATFy66eO08Z",
            "name": "Chris Brown",
            "type": "artist",
            "uri": "spotify:artist:7bXgB6jMjp9ATFy66eO08Z"
          }
        ],
        "name": "Five More Hours - Deorro x Chris Brown"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2DP9xStkVVv753RBiEHXQB"
            },
            "href": "https://api.spotify.com/v1/artists/2DP9xStkVVv753RBiEHXQB",
            "id": "2DP9xStkVVv753RBiEHXQB",
            "name": "Alkilados",
            "type": "artist",
            "uri": "spotify:artist:2DP9xStkVVv753RBiEHXQB"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1r4hJ1h58CWwUQe3MxPuau"
            },
            "href": "https://api.spotify.com/v1/artists/1r4hJ1h58CWwUQe3MxPuau",
            "id": "1r4hJ1h58CWwUQe3MxPuau",
            "name": "Maluma",
            "type": "artist",
            "uri": "spotify:artist:1r4hJ1h58CWwUQe3MxPuau"
          }
        ],
        "name": "Me Gusta - Remix"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/329e4yvIujISKGKz1BZZbO"
            },
            "href": "https://api.spotify.com/v1/artists/329e4yvIujISKGKz1BZZbO",
            "id": "329e4yvIujISKGKz1BZZbO",
            "name": "Farruko",
            "type": "artist",
            "uri": "spotify:artist:329e4yvIujISKGKz1BZZbO"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1XTGADISSMRf8B4TcVGYUC"
            },
            "href": "https://api.spotify.com/v1/artists/1XTGADISSMRf8B4TcVGYUC",
            "id": "1XTGADISSMRf8B4TcVGYUC",
            "name": "Ky-Mani Marley",
            "type": "artist",
            "uri": "spotify:artist:1XTGADISSMRf8B4TcVGYUC"
          }
        ],
        "name": "Chillax (feat. Ky-Mani Marley)"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3f4OfcNtgL9MLgiyOdIHC7"
            },
            "href": "https://api.spotify.com/v1/artists/3f4OfcNtgL9MLgiyOdIHC7",
            "id": "3f4OfcNtgL9MLgiyOdIHC7",
            "name": "JEN",
            "type": "artist",
            "uri": "spotify:artist:3f4OfcNtgL9MLgiyOdIHC7"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5sK8BsvyDl4TFA6KaBf8or"
            },
            "href": "https://api.spotify.com/v1/artists/5sK8BsvyDl4TFA6KaBf8or",
            "id": "5sK8BsvyDl4TFA6KaBf8or",
            "name": "Charly Black",
            "type": "artist",
            "uri": "spotify:artist:5sK8BsvyDl4TFA6KaBf8or"
          }
        ],
        "name": "Pa Que Me Invitan - Spanglish Version"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
            },
            "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
            "id": "0TnOYISbd1XYRBk9myaseg",
            "name": "Pitbull",
            "type": "artist",
            "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1noWnd8QFQD9VLxWEeo4Zf"
            },
            "href": "https://api.spotify.com/v1/artists/1noWnd8QFQD9VLxWEeo4Zf",
            "id": "1noWnd8QFQD9VLxWEeo4Zf",
            "name": "Don Miguelo",
            "type": "artist",
            "uri": "spotify:artist:1noWnd8QFQD9VLxWEeo4Zf"
          }
        ],
        "name": "Como Yo Le Doy (feat. Don Miguelo) - Spanglish Version"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP"
            },
            "href": "https://api.spotify.com/v1/artists/04gDigrS5kc9YWfZHwBETP",
            "id": "04gDigrS5kc9YWfZHwBETP",
            "name": "Maroon 5",
            "type": "artist",
            "uri": "spotify:artist:04gDigrS5kc9YWfZHwBETP"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
            },
            "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
            "id": "2YZyLoL8N0Wb9xBt1NhZWg",
            "name": "Kendrick Lamar",
            "type": "artist",
            "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
          }
        ],
        "name": "Don't Wanna Know"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/21451j1KhjAiaYKflxBjr1"
            },
            "href": "https://api.spotify.com/v1/artists/21451j1KhjAiaYKflxBjr1",
            "id": "21451j1KhjAiaYKflxBjr1",
            "name": "Zion & Lennox",
            "type": "artist",
            "uri": "spotify:artist:21451j1KhjAiaYKflxBjr1"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/329e4yvIujISKGKz1BZZbO"
            },
            "href": "https://api.spotify.com/v1/artists/329e4yvIujISKGKz1BZZbO",
            "id": "329e4yvIujISKGKz1BZZbO",
            "name": "Farruko",
            "type": "artist",
            "uri": "spotify:artist:329e4yvIujISKGKz1BZZbO"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0eHQ9o50hj6ZDNBt6Ys1sD"
            },
            "href": "https://api.spotify.com/v1/artists/0eHQ9o50hj6ZDNBt6Ys1sD",
            "id": "0eHQ9o50hj6ZDNBt6Ys1sD",
            "name": "Yandel",
            "type": "artist",
            "uri": "spotify:artist:0eHQ9o50hj6ZDNBt6Ys1sD"
          }
        ],
        "name": "Pierdo la Cabeza (Remix) [feat. Farruko & Yandel]"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/33ScadVnbm2X8kkUqOkC6Z"
            },
            "href": "https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z",
            "id": "33ScadVnbm2X8kkUqOkC6Z",
            "name": "Don Omar",
            "type": "artist",
            "uri": "spotify:artist:33ScadVnbm2X8kkUqOkC6Z"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/21451j1KhjAiaYKflxBjr1"
            },
            "href": "https://api.spotify.com/v1/artists/21451j1KhjAiaYKflxBjr1",
            "id": "21451j1KhjAiaYKflxBjr1",
            "name": "Zion & Lennox",
            "type": "artist",
            "uri": "spotify:artist:21451j1KhjAiaYKflxBjr1"
          }
        ],
        "name": "Te Quiero Pa´Mi"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4"
            },
            "href": "https://api.spotify.com/v1/artists/540vIaP2JwjQb9dm3aArA4",
            "id": "540vIaP2JwjQb9dm3aArA4",
            "name": "DJ Snake",
            "type": "artist",
            "uri": "spotify:artist:540vIaP2JwjQb9dm3aArA4"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
            },
            "href": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
            "id": "1uNFoZAHBGtllmzznpCI3s",
            "name": "Justin Bieber",
            "type": "artist",
            "uri": "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
          }
        ],
        "name": "Let Me Love You"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1r4hJ1h58CWwUQe3MxPuau"
            },
            "href": "https://api.spotify.com/v1/artists/1r4hJ1h58CWwUQe3MxPuau",
            "id": "1r4hJ1h58CWwUQe3MxPuau",
            "name": "Maluma",
            "type": "artist",
            "uri": "spotify:artist:1r4hJ1h58CWwUQe3MxPuau"
          }
        ],
        "name": "Borro Cassette"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2cy1zPcrFcXAJTP0APWewL"
            },
            "href": "https://api.spotify.com/v1/artists/2cy1zPcrFcXAJTP0APWewL",
            "id": "2cy1zPcrFcXAJTP0APWewL",
            "name": "Gente De Zona",
            "type": "artist",
            "uri": "spotify:artist:2cy1zPcrFcXAJTP0APWewL"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4wLXwxDeWQ8mtUIRPxGiD6"
            },
            "href": "https://api.spotify.com/v1/artists/4wLXwxDeWQ8mtUIRPxGiD6",
            "id": "4wLXwxDeWQ8mtUIRPxGiD6",
            "name": "Marc Anthony",
            "type": "artist",
            "uri": "spotify:artist:4wLXwxDeWQ8mtUIRPxGiD6"
          }
        ],
        "name": "La Gozadera"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3smfreCkyJt7bShaTYpG77"
            },
            "href": "https://api.spotify.com/v1/artists/3smfreCkyJt7bShaTYpG77",
            "id": "3smfreCkyJt7bShaTYpG77",
            "name": "Carlos Baute",
            "type": "artist",
            "uri": "spotify:artist:3smfreCkyJt7bShaTYpG77"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4bw2Am3p9ji3mYsXNXtQcd"
            },
            "href": "https://api.spotify.com/v1/artists/4bw2Am3p9ji3mYsXNXtQcd",
            "id": "4bw2Am3p9ji3mYsXNXtQcd",
            "name": "Piso 21",
            "type": "artist",
            "uri": "spotify:artist:4bw2Am3p9ji3mYsXNXtQcd"
          }
        ],
        "name": "Ando buscando (feat. Piso 21)"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/21451j1KhjAiaYKflxBjr1"
            },
            "href": "https://api.spotify.com/v1/artists/21451j1KhjAiaYKflxBjr1",
            "id": "21451j1KhjAiaYKflxBjr1",
            "name": "Zion & Lennox",
            "type": "artist",
            "uri": "spotify:artist:21451j1KhjAiaYKflxBjr1"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5"
            },
            "href": "https://api.spotify.com/v1/artists/1vyhD5VmyZ7KMfW5gqLgo5",
            "id": "1vyhD5VmyZ7KMfW5gqLgo5",
            "name": "J Balvin",
            "type": "artist",
            "uri": "spotify:artist:1vyhD5VmyZ7KMfW5gqLgo5"
          }
        ],
        "name": "Otra vez (feat. J Balvin)"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/65c5si0ePAwkOCn4M35Ho7"
            },
            "href": "https://api.spotify.com/v1/artists/65c5si0ePAwkOCn4M35Ho7",
            "id": "65c5si0ePAwkOCn4M35Ho7",
            "name": "Sérgio Mendes",
            "type": "artist",
            "uri": "spotify:artist:65c5si0ePAwkOCn4M35Ho7"
          }
        ],
        "name": "Magalenha"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/33ScadVnbm2X8kkUqOkC6Z"
            },
            "href": "https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z",
            "id": "33ScadVnbm2X8kkUqOkC6Z",
            "name": "Don Omar",
            "type": "artist",
            "uri": "spotify:artist:33ScadVnbm2X8kkUqOkC6Z"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1GDbiv3spRmZ1XdM1jQbT7"
            },
            "href": "https://api.spotify.com/v1/artists/1GDbiv3spRmZ1XdM1jQbT7",
            "id": "1GDbiv3spRmZ1XdM1jQbT7",
            "name": "Natti Natasha",
            "type": "artist",
            "uri": "spotify:artist:1GDbiv3spRmZ1XdM1jQbT7"
          }
        ],
        "name": "Dutty Love"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/14zUHaJZo1mnYtn6IBRaRP"
            },
            "href": "https://api.spotify.com/v1/artists/14zUHaJZo1mnYtn6IBRaRP",
            "id": "14zUHaJZo1mnYtn6IBRaRP",
            "name": "Justin Quiles",
            "type": "artist",
            "uri": "spotify:artist:14zUHaJZo1mnYtn6IBRaRP"
          }
        ],
        "name": "Egoísta"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4fCRFHEQgjqakvFgQCliMp"
            },
            "href": "https://api.spotify.com/v1/artists/4fCRFHEQgjqakvFgQCliMp",
            "id": "4fCRFHEQgjqakvFgQCliMp",
            "name": "Jacob Forever",
            "type": "artist",
            "uri": "spotify:artist:4fCRFHEQgjqakvFgQCliMp"
          }
        ],
        "name": "Quiéreme"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1ackd5XprZEkH3McKbQD51"
            },
            "href": "https://api.spotify.com/v1/artists/1ackd5XprZEkH3McKbQD51",
            "id": "1ackd5XprZEkH3McKbQD51",
            "name": "Juan Magán",
            "type": "artist",
            "uri": "spotify:artist:1ackd5XprZEkH3McKbQD51"
          }
        ],
        "name": "Bailando por Ahi"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1a2HwAlOE2wUPmNisvZxSw"
            },
            "href": "https://api.spotify.com/v1/artists/1a2HwAlOE2wUPmNisvZxSw",
            "id": "1a2HwAlOE2wUPmNisvZxSw",
            "name": "Big Yamo",
            "type": "artist",
            "uri": "spotify:artist:1a2HwAlOE2wUPmNisvZxSw"
          }
        ],
        "name": "Entre la Playa Ella y Yo (feat. Vato 18k)"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/33ScadVnbm2X8kkUqOkC6Z"
            },
            "href": "https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z",
            "id": "33ScadVnbm2X8kkUqOkC6Z",
            "name": "Don Omar",
            "type": "artist",
            "uri": "spotify:artist:33ScadVnbm2X8kkUqOkC6Z"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1GDbiv3spRmZ1XdM1jQbT7"
            },
            "href": "https://api.spotify.com/v1/artists/1GDbiv3spRmZ1XdM1jQbT7",
            "id": "1GDbiv3spRmZ1XdM1jQbT7",
            "name": "Natti Natasha",
            "type": "artist",
            "uri": "spotify:artist:1GDbiv3spRmZ1XdM1jQbT7"
          }
        ],
        "name": "Perdido En Tus Ojos"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/329e4yvIujISKGKz1BZZbO"
            },
            "href": "https://api.spotify.com/v1/artists/329e4yvIujISKGKz1BZZbO",
            "id": "329e4yvIujISKGKz1BZZbO",
            "name": "Farruko",
            "type": "artist",
            "uri": "spotify:artist:329e4yvIujISKGKz1BZZbO"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3Isy6kedDrgPYoTS1dazA9"
            },
            "href": "https://api.spotify.com/v1/artists/3Isy6kedDrgPYoTS1dazA9",
            "id": "3Isy6kedDrgPYoTS1dazA9",
            "name": "Sean Paul",
            "type": "artist",
            "uri": "spotify:artist:3Isy6kedDrgPYoTS1dazA9"
          }
        ],
        "name": "Passion Whine - Remastered"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C"
            },
            "href": "https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C",
            "id": "0du5cEVh5yTK9QJze8zA0C",
            "name": "Bruno Mars",
            "type": "artist",
            "uri": "spotify:artist:0du5cEVh5yTK9QJze8zA0C"
          }
        ],
        "name": "24K Magic"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr"
            },
            "href": "https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
            "id": "7n2wHs1TKAczGzO7Dd2rGr",
            "name": "Shawn Mendes",
            "type": "artist",
            "uri": "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr"
          }
        ],
        "name": "Treat You Better"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2xmhyxkjpGNBeWXVMeVWHb"
            },
            "href": "https://api.spotify.com/v1/artists/2xmhyxkjpGNBeWXVMeVWHb",
            "id": "2xmhyxkjpGNBeWXVMeVWHb",
            "name": "Rayo & Toby",
            "type": "artist",
            "uri": "spotify:artist:2xmhyxkjpGNBeWXVMeVWHb"
          }
        ],
        "name": "Arcoiris De Colores"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0odliLZMTk45CEVzF3Zocl"
            },
            "href": "https://api.spotify.com/v1/artists/0odliLZMTk45CEVzF3Zocl",
            "id": "0odliLZMTk45CEVzF3Zocl",
            "name": "Mozart La Para",
            "type": "artist",
            "uri": "spotify:artist:0odliLZMTk45CEVzF3Zocl"
          }
        ],
        "name": "Fiesta y Vacilón"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6tkyhGe9hGI3Lcfo4gVh6Z"
            },
            "href": "https://api.spotify.com/v1/artists/6tkyhGe9hGI3Lcfo4gVh6Z",
            "id": "6tkyhGe9hGI3Lcfo4gVh6Z",
            "name": "ChocQuibTown",
            "type": "artist",
            "uri": "spotify:artist:6tkyhGe9hGI3Lcfo4gVh6Z"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3T54UBNem1hVTQulCdqWfq"
            },
            "href": "https://api.spotify.com/v1/artists/3T54UBNem1hVTQulCdqWfq",
            "id": "3T54UBNem1hVTQulCdqWfq",
            "name": "Ñejo",
            "type": "artist",
            "uri": "spotify:artist:3T54UBNem1hVTQulCdqWfq"
          }
        ],
        "name": "Salsa & Choke"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3ovAAwiwmfP9a5eH9GqOyV"
            },
            "href": "https://api.spotify.com/v1/artists/3ovAAwiwmfP9a5eH9GqOyV",
            "id": "3ovAAwiwmfP9a5eH9GqOyV",
            "name": "Marielle Hazlo",
            "type": "artist",
            "uri": "spotify:artist:3ovAAwiwmfP9a5eH9GqOyV"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1phfTBIocBW3UwqcYjaEN6"
            },
            "href": "https://api.spotify.com/v1/artists/1phfTBIocBW3UwqcYjaEN6",
            "id": "1phfTBIocBW3UwqcYjaEN6",
            "name": "Mike Bahía",
            "type": "artist",
            "uri": "spotify:artist:1phfTBIocBW3UwqcYjaEN6"
          }
        ],
        "name": "Demasiado Brutal"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
            },
            "href": "https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X",
            "id": "4q3ewBCX7sLwd24euuV69X",
            "name": "Bad Bunny",
            "type": "artist",
            "uri": "spotify:artist:4q3ewBCX7sLwd24euuV69X"
          }
        ],
        "name": "Soy Peor"
      }
    }
  ]
}
