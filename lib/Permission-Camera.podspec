Pod::Spec.new do |s|
    s.name             = 'Permission-Camera'
    s.version          = '1.0.0'
    s.summary         = 'A React Native permission handler for Camera.'
    s.description     = <<-DESC
                         A React Native permission handler for accessing the Camera.
                         DESC
    s.homepage        = 'https://github.com/zo0r/react-native-permissions'
    s.license         = { :type => 'MIT' } # Specify license type, but no license file
    s.author          = { 'Your Name' => 'your-email@example.com' }
    s.source          = { :git => 'https://github.com/zo0r/react-native-permissions.git', :tag => s.version.to_s }
    s.source_files    = 'ios/Camera/**/*.{h,m,mm,swift}'
    s.requires_arc    = true
    s.dependency      'React'
    s.dependency      'React-Core'
    s.dependency      'React-RCTText'
    s.dependency      'React-RCTImage'
    s.dependency      'React-RCTNetwork'
  end
  