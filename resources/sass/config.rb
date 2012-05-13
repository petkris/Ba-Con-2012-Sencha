# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, '..', '..', 'sdk', 'resources', 'themes')

# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "css")

# Require any additional compass plugins here.
images_dir = File.join(dir, "..", "images")
output_style = :compressed
environment = :production

#sass_options = {:debug_info=>true} # by Compass.app 
output_style = :nested # by Compass.app 