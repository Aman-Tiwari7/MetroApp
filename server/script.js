export const allStation = [
    // Red Line
    'Adarsh Nagar',
    'AIIMS',
    'Akshardham',
    'Anand Vihar',
    'Arjan Garh',
    'Ashok Park Main',
    'Azadpur',
    'Badarpur',
    'Badkal Mor',
    'Bahadurgarh City',
    'Barakhamba Road',
    'Bata Chowk',
    'Botanical Garden',
    'Brigadier Hoshiyar Singh',
    'Central Secretariat',
    'Chandni Chowk',
    'Chhatarpur',
    'Chawri Bazar',
    'Civil Lines',
    'Delhi Aerocity',
    'Delhi Gate',
    'Dhaula Kuan',
    'Dilshad Garden',
    'Dwarka',
    'Dwarka Mor',
    'Dwarka Sector 10',
    'Dwarka Sector 11',
    'Dwarka Sector 12',
    'Dwarka Sector 13',
    'Dwarka Sector 14',
    'Dwarka Sector 21',
    'Dwarka Sector 8',
    'Dwarka Sector 9',
    'Escorts Mujesar',
    'Ghitorni',
    'Golf Course',
    'Govindpuri',
    'Green Park',
    'Guru Dronacharya',
    'Haiderpur Badli Mor',
    'Harkesh Nagar Okhla',
    'Hauz Khas',
    'HUDA City Centre',
    'IFFCO Chowk',
    'IGI Airport',
    'Inderlok',
    'Indraprastha',
    'Jahangirpuri',
    'Janakpuri East',
    'Janakpuri West',
    'Jangpura',
    'Janpath',
    'Jasola Apollo',
    'Jasola Vihar Shaheen Bagh',
    'Jhandewalan',
    'Jhilmil',
    'Jor Bagh',
    'Kailash Colony',
    'Kalkaji Mandir',
    'Kanhaiya Nagar',
    'Karol Bagh',
    'Kashmere Gate',
    'Kaushambi',
    'Keshav Puram',
    'Khan Market',
    'Kirti Nagar',
    'Kohat Enclave',
    'Lajpat Nagar',
    'Lal Qila',
    'Laxmi Nagar',
    'Madipur',
    'Majlis Park',
    'Mandi House',
    'Mansarovar Park',
    'Mayapuri',
    'Mayur Vihar Extension',
    'Mayur Vihar Phase 1',
    'MG Road',
    'Mohan Estate',
    'Moolchand',
    'Moti Nagar',
    'Mundka',
    'Mundka Industrial Area',
    'Najafgarh',
    'Nangloi',
    'Nangloi Railway Station',
    'Nawada',
    'Netaji Subhash Place',
    'New Ashok Nagar',
    'New Delhi',
    'NHPC Chowk',
    'Nirman Vihar',
    'Noida City Centre',
    'Noida Sector 15',
    'Noida Sector 16',
    'Noida Sector 18',
    'Okhla Bird Sanctuary',
    'Okhla NSIC',
    'Okhla Vihar',
    'Paschim Vihar East',
    'Paschim Vihar West',
    'Patel Chowk',
    'Patel Nagar',
    'Pitampura',
    'Pragati Maidan',
    'Pratap Nagar',
    'Preet Vihar',
    'Pul Bangash',
    'Qutub Minar',
    'Race Course',
    'Rajdhani Park',
    'Rajendra Place',
    'Rajiv Chowk',
    'Rajouri Garden',
    'Ramesh Nagar',
    'Rithala',
    'Sadar Bazaar Cantonment',
    'Saket',
    'Samaypur Badli',
    'Sant Surdas - Sihi',
    'Sarai',
    'Sarita Vihar',
    'Satguru Ram Singh Marg',
    'Seelampur',
    'Shadipur',
    'Shahdara',
    'Shalimar Bagh',
    'Shankar Vihar',
    'Shastri Nagar',
    'Shastri Park',
    'Shivaji Stadium',
    'Sikandarpur',
    'Sir Vishweshwaraiah Moti Bagh',
    'South Extension',
    'Subhash Nagar',
    'Sultanpur',
    'Surajmal Stadium',
    'Tagore Garden',
    'Tilak Nagar',
    'Tikri Border',
    'Tikri Kalan',
    'Tis Hazari',
    'Tughlakabad',
    'Udyog Bhawan',
    'Udyog Nagar',
    'Uttam Nagar East',
    'Uttam Nagar West',
    'Vaishali',
    'Vidhan Sabha',
    'Vishwa Vidyalaya',
    'Welcome',
    'Yamuna Bank'
  ];

const violetLineStations = {
    'Kashmere Gate': 'Lal Qila',
    'Lal Qila': 'Jama Masjid',
    'Jama Masjid': 'Delhi Gate',
    'Delhi Gate': 'ITO',
    'ITO': 'Mandi House',
    'Mandi House': 'Janpath',
    'Janpath': 'Central Secretariat',
    'Central Secretariat': 'Khan Market',
    'Khan Market': 'Jawaharlal Nehru Stadium',
    'Jawaharlal Nehru Stadium': 'Jangpura',
    'Jangpura': 'Lajpat Nagar',
    'Lajpat Nagar': 'Moolchand',
    'Moolchand': 'Kailash Colony',
    'Kailash Colony': 'Nehru Place',
    'Nehru Place': 'Kalkaji Mandir',
    'Kalkaji Mandir': 'Govindpuri',
    'Govindpuri': 'Harkesh Nagar Okhla',
    'Harkesh Nagar Okhla': 'Jasola Apollo',
    'Jasola Apollo': 'Sarita Vihar',
    'Sarita Vihar': 'Mohan Estate',
    'Mohan Estate': 'Tughlakabad',
    'Tughlakabad': 'Badarpur Border',
    'Badarpur Border': 'Sarai',
    'Sarai': 'NHPC Chowk',
    'NHPC Chowk': 'Mewla Maharajpur',
    'Mewla Maharajpur': 'Sector 28',
    'Sector 28': 'Badkal Mor',
    'Badkal Mor': 'Old Faridabad',
    'Old Faridabad': 'Neelam Chowk Ajronda',
    'Neelam Chowk Ajronda': 'Bata Chowk',
    'Bata Chowk': 'Escorts Mujesar',
    'Escorts Mujesar': 'Sant Surdas - Sihi',
    'Sant Surdas - Sihi': 'Raja Nahar Singh'
  };

  const redLineStations = {
    'Rithala': 'Rohini West',
    'Rohini West': 'Rohini East',
    'Rohini East': 'Pitampura',
    'Pitampura': 'Kohat Enclave',
    'Kohat Enclave': 'Netaji Subhash Place',
    'Netaji Subhash Place': 'Keshav Puram',
    'Keshav Puram': 'Kanhaiya Nagar',
    'Kanhaiya Nagar': 'Inderlok',
    'Inderlok': 'Shastri Nagar',
    'Shastri Nagar': 'Pratap Nagar',
    'Pratap Nagar': 'Pul Bangash',
    'Pul Bangash': 'Tis Hazari',
    'Tis Hazari': 'Kashmere Gate',
    'Kashmere Gate': 'Shastri Park',
    'Shastri Park': 'Seelampur',
    'Seelampur': 'Welcome',
    'Welcome': 'Shahdara',
    'Shahdara': 'Mansarovar Park',
    'Mansarovar Park': 'Jhilmil',
    'Jhilmil': 'Dilshad Garden'
  };
  
  const blueLineStations = {
    'Dwarka Sector 21': 'Dwarka Sector 8',
    'Dwarka Sector 8': 'Dwarka Sector 9',
    'Dwarka Sector 9': 'Dwarka Sector 10',
    'Dwarka Sector 10': 'Dwarka Sector 11',
    'Dwarka Sector 11': 'Dwarka Sector 12',
    'Dwarka Sector 12': 'Dwarka Sector 13',
    'Dwarka Sector 13': 'Dwarka Sector 14',
    'Dwarka Sector 14': 'Dwarka',
    'Dwarka': 'Dwarka Mor',
    'Dwarka Mor': 'Nawada',
    'Nawada': 'Uttam Nagar West',
    'Uttam Nagar West': 'Uttam Nagar East',
    'Uttam Nagar East': 'Janakpuri West',
    'Janakpuri West': 'Janakpuri East',
    'Janakpuri East': 'Tilak Nagar',
    'Tilak Nagar': 'Subhash Nagar',
    'Subhash Nagar': 'Tagore Garden',
    'Tagore Garden': 'Rajouri Garden',
    'Rajouri Garden': 'Ramesh Nagar',
    'Ramesh Nagar': 'Moti Nagar',
    'Moti Nagar': 'Kirti Nagar',
    'Kirti Nagar': 'Shadipur',
    'Shadipur': 'Patel Nagar',
    'Patel Nagar': 'Rajendra Place',
    'Rajendra Place': 'Karol Bagh',
    'Karol Bagh': 'Jhandewalan',
    'Jhandewalan': 'R K Ashram Marg',
    'R K Ashram Marg': 'Rajiv Chowk',
    'Rajiv Chowk': 'Barakhamba Road',
    'Barakhamba Road': 'Mandi House',
    'Mandi House': 'Pragati Maidan',
    'Pragati Maidan': 'Indraprastha',
    'Indraprastha': 'Yamuna Bank',
    'Yamuna Bank': 'Akshardham',
    'Akshardham': 'Mayur Vihar Phase 1',
    'Mayur Vihar Phase 1': 'Mayur Vihar Extension',
    'Mayur Vihar Extension': 'New Ashok Nagar',
    'New Ashok Nagar': 'Noida Sector 15',
    'Noida Sector 15': 'Noida Sector 16',
    'Noida Sector 16': 'Noida Sector 18',
    'Noida Sector 18': 'Botanical Garden',
    'Botanical Garden': 'Golf Course',
    'Golf Course': 'Noida City Centre'
  };

  const yellowLineStations = {
    'Samaypur Badli': 'Rohini Sector 18',
    'Rohini Sector 18': 'Haiderpur Badli Mor',
    'Haiderpur Badli Mor': 'Jahangirpuri',
    'Jahangirpuri': 'Adarsh Nagar',
    'Adarsh Nagar': 'Azadpur',
    'Azadpur': 'Model Town',
    'Model Town': 'G T B Nagar',
    'G T B Nagar': 'Vishwa Vidyalaya',
    'Vishwa Vidyalaya': 'Vidhan Sabha',
    'Vidhan Sabha': 'Civil Lines',
    'Civil Lines': 'Kashmere Gate',
    'Kashmere Gate': 'Chandni Chowk',
    'Chandni Chowk': 'Chawri Bazar',
    'Chawri Bazar': 'New Delhi',
    'New Delhi': 'Rajiv Chowk',
    'Rajiv Chowk': 'Patel Chowk',
    'Patel Chowk': 'Central Secretariat',
    'Central Secretariat': 'Udyog Bhawan',
    'Udyog Bhawan': 'Race Course',
    'Race Course': 'Jor Bagh',
    'Jor Bagh': 'INA',
    'INA': 'AIIMS',
    'AIIMS': 'Green Park',
    'Green Park': 'Hauz Khas',
    'Hauz Khas': 'Malviya Nagar',
    'Malviya Nagar': 'Saket',
    'Saket': 'Qutub Minar',
    'Qutub Minar': 'Chhatarpur',
    'Chhatarpur': 'Sultanpur',
    'Sultanpur': 'Ghitorni',
    'Ghitorni': 'Arjan Garh',
    'Arjan Garh': 'Guru Dronacharya',
    'Guru Dronacharya': 'Sikandarpur',
    'Sikandarpur': 'MG Road',
    'MG Road': 'IFFCO Chowk',
    'IFFCO Chowk': 'Huda City Centre'
  };

  
  const greenLineStations = {
    'Brigadier Hoshiyar Singh': 'Bahadurgarh City',
    'Bahadurgarh City': 'Pandit Shree Ram Sharma',
    'Pandit Shree Ram Sharma': 'Tikri Border',
    'Tikri Border': 'Tikri Kalan',
    'Tikri Kalan': 'Ghevra Metro Station',
    'Ghevra Metro Station': 'Mundka Industrial Area',
    'Mundka Industrial Area': 'Mundka',
    'Mundka': 'Rajdhani Park',
    'Rajdhani Park': 'Nangloi Railway Station',
    'Nangloi Railway Station': 'Nangloi',
    'Nangloi': 'Surajmal Stadium',
    'Surajmal Stadium': 'Udyog Nagar',
    'Udyog Nagar': 'Peeragarhi',
    'Peeragarhi': 'Paschim Vihar West',
    'Paschim Vihar West': 'Paschim Vihar East',
    'Paschim Vihar East': 'Madi Pur',
    'Madi Pur': 'Shivaji Park',
    'Shivaji Park': 'Punjabi Bagh',
    'Punjabi Bagh': 'Ashok Park Main',
    'Ashok Park Main': 'Satguru Ram Singh Marg',
    'Satguru Ram Singh Marg': 'Kirti Nagar',
    'Kirti Nagar': 'Moti Nagar',
    'Moti Nagar': 'Ramesh Nagar',
    'Ramesh Nagar': 'Rajouri Garden',
    'Rajouri Garden': 'Tagore Garden',
    'Tagore Garden': 'Subhash Nagar',
    'Subhash Nagar': 'Tilak Nagar',
    'Tilak Nagar': 'Janakpuri West',
    'Janakpuri West': 'Janakpuri East',
    'Janakpuri East': 'Uttam Nagar West',
    'Uttam Nagar West': 'Uttam Nagar East',
    'Uttam Nagar East': 'Nawada',
    'Nawada': 'Dwarka Mor',
    'Dwarka Mor': 'Dwarka',
    'Dwarka': 'Dwarka Sector 14',
    'Dwarka Sector 14': 'Dwarka Sector 13',
    'Dwarka Sector 13': 'Dwarka Sector 12',
    'Dwarka Sector 12': 'Dwarka Sector 11',
    'Dwarka Sector 11': 'Dwarka Sector 10',
    'Dwarka Sector 10': 'Dwarka Sector 9',
    'Dwarka Sector 9': 'Dwarka Sector 8'
  };

  const pinkLineStations = {
    'Majlis Park': 'Azadpur',
    'Azadpur': 'Shalimar Bagh',
    'Shalimar Bagh': 'Netaji Subhash Place',
    'Netaji Subhash Place': 'Shakurpur',
    'Shakurpur': 'Punjabi Bagh West',
    'Punjabi Bagh West': 'ESI Hospital',
    'ESI Hospital': 'Rajouri Garden',
    'Rajouri Garden': 'Mayapuri',
    'Mayapuri': 'Naraina Vihar',
    'Naraina Vihar': 'Delhi Cantt',
    'Delhi Cantt': 'Durgabai Deshmukh South Campus',
    'Durgabai Deshmukh South Campus': 'Sir Vishweshwaraiah Moti Bagh',
    'Sir Vishweshwaraiah Moti Bagh': 'Bhikaji Cama Place',
    'Bhikaji Cama Place': 'Sarojini Nagar',
    'Sarojini Nagar': 'INA',
    'INA': 'South Extension',
    'South Extension': 'Lajpat Nagar',
    'Lajpat Nagar': 'Vinobapuri',
    'Vinobapuri': 'Ashram',
    'Ashram': 'Hazrat Nizamuddin',
    'Hazrat Nizamuddin': 'Mayur Vihar Phase 1',
    'Mayur Vihar Phase 1': 'Mayur Vihar Extension',
    'Mayur Vihar Extension': 'New Ashok Nagar',
    'New Ashok Nagar': 'Noida Sector 15',
    'Noida Sector 15': 'Noida Sector 16',
    'Noida Sector 16': 'Noida Sector 18',
    'Noida Sector 18': 'Botanical Garden',
    'Botanical Garden': 'Golf Course',
    'Golf Course': 'Noida City Centre'
  };

  const magentaLineStations = {
    'Janakpuri West': 'Dabri Mor - Janakpuri South',
    'Dabri Mor - Janakpuri South': 'Dashrath Puri',
    'Dashrath Puri': 'Palam',
    'Palam': 'Sadar Bazaar Cantonment',
    'Sadar Bazaar Cantonment': 'Terminal 1 - IGI Airport',
    'Terminal 1 - IGI Airport': 'Shankar Vihar',
    'Shankar Vihar': 'Vasant Vihar',
    'Vasant Vihar': 'Munirka',
    'Munirka': 'R K Puram',
    'R K Puram': 'IIT Delhi',
    'IIT Delhi': 'Hauz Khas',
    'Hauz Khas': 'Panchsheel Park',
    'Panchsheel Park': 'Chirag Delhi',
    'Chirag Delhi': 'Greater Kailash',
    'Greater Kailash': 'Nehru Enclave',
    'Nehru Enclave': 'Kalkaji Mandir',
    'Kalkaji Mandir': 'Okhla NSIC',
    'Okhla NSIC': 'Sukhdev Vihar',
    'Sukhdev Vihar': 'Jamia Millia Islamia',
    'Jamia Millia Islamia': 'Okhla Vihar',
    'Okhla Vihar': 'Jasola Vihar Shaheen Bagh',
    'Jasola Vihar Shaheen Bagh': 'Kalindi Kunj',
    'Kalindi Kunj': 'Okhla Bird Sanctuary',
    'Okhla Bird Sanctuary': 'Botanical Garden'
  };

  const greyLineStations = {
    'Dwarka': 'Najafgarh',
    'Najafgarh': 'Nangli',
    'Nangli': 'Rajdhani Park',
    'Rajdhani Park': 'Mundka Industrial Area',
    'Mundka Industrial Area': 'Mundka'
  };

  const orangeLineStations = {
    'New Delhi': 'Shivaji Stadium',
    'Shivaji Stadium': 'Dhaula Kuan',
    'Dhaula Kuan': 'Delhi Aerocity',
    'Delhi Aerocity': 'IGI Airport',
    'IGI Airport': 'Dwarka Sector 21'
  };

  const undirectedAdjacencyList = {};

function addConnection(stationA, stationB) {
  if (!undirectedAdjacencyList[stationA]) {
    undirectedAdjacencyList[stationA] = [];
  }
  if (!undirectedAdjacencyList[stationB]) {
    undirectedAdjacencyList[stationB] = [];
  }

  undirectedAdjacencyList[stationA].push(stationB);
  undirectedAdjacencyList[stationB].push(stationA);
}

// Process each line dictionary and add connections to undirectedAdjacencyList
const lines = [violetLineStations, redLineStations, blueLineStations, yellowLineStations, greenLineStations, pinkLineStations, magentaLineStations, greyLineStations, orangeLineStations];

lines.forEach(line => {
  for (const station in line) {
    const nextStation = line[station];
    addConnection(station, nextStation);
  }
});


 export default function dijkstra(startStation, endStation) {
    // Create a map to store the distances from the start station to all other stations
    const distances = new Map();
    // Create a priority queue to track the stations to visit
    const queue = [];
    // Create a map to store the previous station for each station in the shortest path
    const previousStations = new Map();
  
    // Initialize distances with Infinity for all stations except the start station
    for (const station in undirectedAdjacencyList) {
      distances.set(station, station === startStation ? 0 : Infinity);
    }
  
    // Enqueue the start station with a distance of 0
    queue.push({ station: startStation, distance: 0 });
  
    while (queue.length > 0) {
      // Dequeue the station with the minimum distance
      const { station, distance } = queue.shift();
  
      // Check if the current distance is greater than the recorded distance
      if (distance > distances.get(station)) {
        continue;
      }
  
      // Iterate over the adjacent stations
      for (const neighbor of undirectedAdjacencyList[station]) {
        // Calculate the new distance
        const newDistance = distance + 1; // Assuming all edge weights are 1
  
        // Update the distance and enqueue the neighbor if it provides a shorter path
        if (newDistance < distances.get(neighbor)) {
          distances.set(neighbor, newDistance);
          previousStations.set(neighbor, station);
          queue.push({ station: neighbor, distance: newDistance });
        }
      }
    }
  
    // Check if there is a valid path from the start station to the end station
    if (!previousStations.has(endStation)) {
      return null; // No path exists
    }
  
    // Build the shortest path from the previous stations
    const path = [];
    let currentStation = endStation;
    while (currentStation !== startStation) {
      path.unshift(currentStation);
      currentStation = previousStations.get(currentStation);
    }
    path.unshift(startStation);
  
    return {
      distance: distances.get(endStation),
      path: path,
    };
  }
  
  // Example usage
  // const startStation = 'Dwarka Sector 21';
  // const endStation = 'Sector 28';
  // const shortestPath = dijkstra(undirectedAdjacencyList, startStation, endStation);
  // console.log(shortestPath)

