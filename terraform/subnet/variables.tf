variable "vpc_id" {
    description = "The VPC ID"
    type = string
}

variable "cidr_block" {
    description = "value of the cidr block"
    type = string
    default = "10.0.1.0/24"
}

variable "subnet_name" {
    description = "value of the subnet name"
    type = string
    default = "Amalitect-Website-Subnet"
}

variable "map_public_ip_on_launch" {
    description = "value of the map public ip on launch"
    type = bool
    default = true
}
