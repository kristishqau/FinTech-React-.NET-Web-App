import { getCompanyProfile } from '../api'

export const fetchCompanyProfile = async (ticker: string) => {
  try {
    const result = await getCompanyProfile(ticker)
    return result?.data?.[0] || null
  } catch (error) {
    console.error('Error fetching company profile:', error)
    return null
  }
}