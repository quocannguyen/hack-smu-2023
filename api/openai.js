export async function fetchCartesiData() {
  try {
    const url = "http://34.238.254.89:3000/notices";
    const response = await fetch(url)
    
    if (response.status === 200) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      return jsonResponse
    } else {
      console.error('Error:', response.status);
    }
  } catch (e) {
      console.log(e)
  }
}
export async function getQuizOpenAI(content) {
  try {
    console.log("Sending: " + content);
      const url = 'https://z03aj3glff.execute-api.us-east-1.amazonaws.com/Prod'; // Replace with your API endpoint URL

    const data = {
      question: content,
      type: "quiz"
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      const jsonResponse = await response.json();
      console.log(jsonResponse.result);
      return jsonResponse.result
    } else {
      console.error('Error:', response.status);
    }
  } catch (e) {
      console.log(e)
  }
}

export async function getOpenAi(content) {
    return testGetOpenAi(content);
}

export async function testGetOpenAi(content) {
    try {
        const url = 'https://z03aj3glff.execute-api.us-east-1.amazonaws.com/Prod'; // Replace with your API endpoint URL

      const data = {
        question: content,
        type: "message"
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const jsonResponse = await response.json();
        // console.log(jsonResponse.result);
        return jsonResponse.result
      } else {
        console.error('Error:', response.status);
      }
    } catch (e) {
        console.log(e)
    }
}