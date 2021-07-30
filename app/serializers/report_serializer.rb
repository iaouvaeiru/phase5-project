class ReportSerializer < ActiveModel::Serializer
  attributes :id, :reported, :reason
end
