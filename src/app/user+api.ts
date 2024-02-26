import { ExpoResponse, ExpoRequest } from "expo-router/server"

export async function POST(request: ExpoRequest): Promise<ExpoResponse> {
  const { email, password } = await request.json()

  if (email === "rodrigo@email.com" && password === "123") {
    return ExpoResponse.json({
      email,
      name: "Rodrigo Gonçalves",
    })
  }

  return new ExpoResponse("Usuário e/ou senha incorreta!", {
    status: 404,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
