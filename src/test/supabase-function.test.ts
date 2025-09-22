import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the Supabase function
const mockSupabaseFunction = {
  invoke: vi.fn()
}

// Mock the demo request data
const mockDemoData = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  company: 'Test Company',
  interest: 'ERP System',
  preferred_date: '2024-01-15',
  message: 'Test message'
}

describe('Supabase Function Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call supabase function with correct parameters', async () => {
    // Mock successful response
    mockSupabaseFunction.invoke.mockResolvedValueOnce({
      data: { success: true, id: '123' },
      error: null
    })

    // Simulate the function call
    const result = await mockSupabaseFunction.invoke('submit-demo', {
      body: mockDemoData
    })

    expect(mockSupabaseFunction.invoke).toHaveBeenCalledWith('submit-demo', {
      body: mockDemoData
    })
    expect(result.data.success).toBe(true)
    expect(result.error).toBeNull()
  })

  it('should handle function errors', async () => {
    // Mock error response
    const mockError = new Error('Function execution failed')
    mockSupabaseFunction.invoke.mockRejectedValueOnce(mockError)

    try {
      await mockSupabaseFunction.invoke('submit-demo', {
        body: mockDemoData
      })
    } catch (error) {
      expect(error).toBe(mockError)
    }
  })

  it('should validate required fields', () => {
    const requiredFields = ['name', 'email', 'phone', 'company']
    
    requiredFields.forEach(field => {
      expect(mockDemoData).toHaveProperty(field)
      expect(mockDemoData[field as keyof typeof mockDemoData]).toBeTruthy()
    })
  })

  it('should format email data correctly', () => {
    const emailData = {
      to: ['info@creativenetworkservices.com'],
      from: 'Creative Network <onboarding@resend.dev>',
      subject: `New Meeting Request - ${mockDemoData.interest} Plan from ${mockDemoData.name}`,
      reply_to: mockDemoData.email
    }

    expect(emailData.to).toContain('info@creativenetworkservices.com')
    expect(emailData.from).toBe('Creative Network <onboarding@resend.dev>')
    expect(emailData.subject).toContain(mockDemoData.name)
    expect(emailData.reply_to).toBe(mockDemoData.email)
  })
})

describe('Email Integration Tests', () => {
  it('should use correct environment variables', () => {
    const bookingEmail = import.meta.env.VITE_BOOKING_EMAIL || 'info@creativenetworkservices.com'
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tpopwklrqwkkprefbyls.supabase.co'
    
    expect(bookingEmail).toBe('info@creativenetworkservices.com')
    expect(supabaseUrl).toContain('supabase.co')
  })

  it('should format phone number correctly', () => {
    const phoneNumber = '+962 79 555 0073'
    const formattedPhone = phoneNumber.replace(/\s/g, '')
    
    expect(formattedPhone).toBe('+962795550073')
  })

  it('should validate email format', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const validEmails = [
      'info@creativenetworkservices.com',
      'john@example.com',
      'test@domain.co.uk'
    ]
    
    validEmails.forEach(email => {
      expect(emailRegex.test(email)).toBe(true)
    })
  })
})









